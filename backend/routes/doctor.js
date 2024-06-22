const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const userController=require('./../controllers/userController')

router
  .route("/")
  .get(doctorController.getAllDoctors)
  .post(doctorController.createDoctor);

router
  .route("/:id")
  .get(doctorController.getDoctor)
  .patch(userController.protect,doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

module.exports = router;
