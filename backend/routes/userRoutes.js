const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");


router.post("/register", UserController.signup);
router.post("/login", UserController.login);

// protected Routes
// router.post("/changepassword", UserController.changePassword);
// router.get("/loggeduser", UserController.loggedUser);

module.exports = router;
