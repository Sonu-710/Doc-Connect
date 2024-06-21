const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.route("/").get(doctorController.getAllDoctors);

module.exports = router;
