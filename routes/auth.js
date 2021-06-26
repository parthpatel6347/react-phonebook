const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const { body, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.send("get logged in user");
});

router.post(
  "/",
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password").exists().withMessage("Please enter a valid password."),
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.length) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        console.log("email wrong");
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      console.log(user.password);
      console.log(password);
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        console.log("pwd wrong");

        return res.status(400).json({ message: "Invalid Credentials" });
      }

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
