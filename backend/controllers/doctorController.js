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
exports.getDoctor = async (req, res) => {
  try {
    const doctor = await User.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "No doctor found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        doctor,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message:
        "Something went wrong while retrieving the doctor. Please try again later.",
    });
  }
};
exports.createDoctor = async (req, res) => {
  try {
    const newDoc = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        doctor: newDoc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message:
        "Something went wrong while creating the doctor. Please try again later.",
    });
  }
};
exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "No doctor found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        doctor,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message:
        "Something went wrong while updating the doctor. Please try again later.",
    });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await User.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        status: "fail",
        message: "No doctor found with that ID",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message:
        "Something went wrong while deleting the doctor. Please try again later.",
    });
  }
};
