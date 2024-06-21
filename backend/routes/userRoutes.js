const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
// const checkUserAuth = require("../middlewares/authMiddleware");
//Route Level Middleware to protect route
// router.use("/changepassword", checkUserAuth);
// router.use("/loggeduser", checkUserAuth);

// // public Routes
router.post("/register", UserController.signup);
router.post("/login", UserController.login);

// protected Routes
// router.post("/changepassword", UserController.changePassword);
// router.get("/loggeduser", UserController.loggedUser);

module.exports = router;
