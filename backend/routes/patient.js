const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

router.route("/").get(patientController.getAllPatients);

module.exports = router;
