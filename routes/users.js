const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  //name is required
  body("name").not().isEmpty().withMessage("Please enter a name."),
  // username must be an email
  body("email").isEmail().withMessage("Please enter a valid email."),
  // password must be at least 5 chars long
  body("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ msg: "A user with this email already exists." });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //token payload
      const payload = {
        user: {
          id: user.id,
        },
      };
      //get token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
