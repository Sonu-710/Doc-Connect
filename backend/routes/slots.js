const express = require("express");
const router = express.Router();
const slotController = require("../controllers/slotController");
const userController = require("./../controllers/userController");

router
  .route("/")
  .post(
    userController.protect,
    userController.restrictTo("doctor"),
    slotController.createSlot
  );

router
  .route("/:id")
  .get(slotController.getAllSlots)
  .patch(slotController.updateSlot)
  .delete(slotController.deleteSlot);

module.exports = router;
