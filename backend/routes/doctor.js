const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router
  .route("/")
  .get(doctorController.getAllDoctors)
  .post(doctorController.createDoctor);

router
  .route("/:id")
  .get(doctorController.getDoctor)
  .patch(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

module.exports = router;
