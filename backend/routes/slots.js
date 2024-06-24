const express = require("express");
const router = express.Router();
const slotController = require("../controllers/slotController");
const userController = require("./../controllers/userController");

router
  .route("/")
  .get(userController.protect,userController.restrictTo('doctor'),slotController.getAllSlots)
  .post(
    userController.protect,
    userController.restrictTo("doctor"),
    slotController.createSlot
  );

router
  .route("/:id")
  .patch(slotController.updateSlot)
  .delete(slotController.deleteSlot);

module.exports = router;
