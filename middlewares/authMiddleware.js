const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const { promises } = require("nodemailer/lib/xoauth2");

var checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      // verify TOKEN
      // console.log(token);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // console.log("Decoded Token:", decodedToken);
      const userID = decodedToken.userID;
      // console.log(userID);
      req.user = await UserModel.findById(userID).select("-password");
      // console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({
        status: "failed",
        message: "Unautorized User!",
      });
    }
  }
  if (!token) {
    res.status(401).send({
      status: "failed",
      message: "Unauthorized UserModel,No Token",
    });
  }
};

module.exports = checkUserAuth;
