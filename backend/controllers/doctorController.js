const AppError = require("../utils/AppError");
const User = require("./../models/user");

exports.getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await User.find({ role: "doctor" });
    res.status(200).json({
      status: "success",
      results: doctors.length,
      data: doctors,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
