const AppError = require("../utils/AppError");
const User = require("./../models/user");

exports.getAllPatients = async (req, res, next) => {
  try {
    const patient = await User.find({ role: "patient" });
    res.status(200).json({
      status: "success",
      results: patient.length,
      data: patient,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
