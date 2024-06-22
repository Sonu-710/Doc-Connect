const express = require("express");
const router = express.Router();
const patientController = require("../controllers/doctorController");

router.route("/patients").get(patientController.getAllPatients);

module.exports = router;
