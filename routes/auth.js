const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

router.get("/", auth, async (req, res) => {
  try {
    //find user from user.id, which is added to the req by the middleware(deduced from the token)
    //we dont need user password
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password").exists().withMessage("Please enter a valid password."),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
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
