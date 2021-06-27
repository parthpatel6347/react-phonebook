const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //get token
  const token = req.header("x-auth-token");

  //if no token
  if (!token) {
    return res
      .status(401)
      .json({ message: "Token not found, authorization failed." });
  }

  //if token found
  try {
    const tokenData = jwt.verify(token, config.get("jwtSecret"));
    req.user = tokenData.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
