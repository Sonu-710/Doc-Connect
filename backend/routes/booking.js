const express = require("express");
const router = express.Router();
const bookingController = require("./../controllers/bookingController");
const userController = require("./../controllers/userController");

router
  .route("/")
  .post(
    userController.protect,
    userController.restrictTo("patient"),
    bookingController.createBooking
  );

module.exports = router;
