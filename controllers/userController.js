const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static userRegisteration = async (req, res) => {
    const { name, email, password, confirmPassword, tc } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({
        status: "failed",
        message: "User already Exist!",
      });
    } else {
      if (name && email && password && confirmPassword && tc) {
        if (password === confirmPassword) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc,
            });
            await doc.save();
            const saved_user = await UserModel.findOne({ email: email });
            // Generate JWT Token
            const token = jwt.sign(
              { userID: saved_user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "20d" }
            );
            res.status(201).send({
              status: "success",
              message: "Registered Successfully!",
              token: token,
            });
          } catch (error) {
            console.log(error);
            res.send({
              status: "failed",
              message: "Unable to register",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "password and confirmPassword does not matched",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "All fields required",
        });
      }
    }
  };
  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email });
        if (user) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            // Generate JWT Token
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "20d" }
            );
            res.status(200).send({
              status: "success",
              message: "logged in successfully!",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Incorrect Email or Password!",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not registered user! please register first.",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "All fields are required!",
        });
      }
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Unable to login",
      });
    }
  };
  static changePassword = async (req, res) => {
    const { password, confirmPassword } = req.body;
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        res.send({
          status: "failed",
          message: "password and confirmPassword does not matched!",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newHashPassword = await bcrypt.hash(password, salt);
        // console.log(req.user._id);
        await UserModel.findByIdAndUpdate(req.user._id, {
          $set: { password: newHashPassword },
        });
        res.send({
          status: "success",
          message: "Password changed succesfully",
        });
      }
    } else {
      res.send({
        status: "failed",
        message: "All fields are required!",
      });
    }
  };
  static loggedUser = async (req, res) => {
    res.send({ user: req.user });
  };
  static sendUserPasswordResetEmail = async (req, res) => {
    const { email } = req.body;
    if (email) {
      await User.findOne(email);
    } else {
      res.send({
        status: "failed",
        message: "All fields are required!",
      });
    }
  };
}

module.exports = UserController;
