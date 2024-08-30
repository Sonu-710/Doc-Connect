const AppError = require("../utils/AppError");
const User = require("./../models/user");
const catchAsync = require("./../utils/CatchAsync.js");

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
exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await User.findById(req.params.id);
  // User.findOne({ _id: req.params.id })

  if (!doctor) {
    return next(new AppError("No doctor found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      doctor,
    },
  });
});
exports.createDoctor = catchAsync(async (req, res, next) => {
  const newDoc = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      doctor: newDoc,
    },
  });
});

exports.updateDoctor = catchAsync(async (req, res, next) => {
  const doctor = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doctor) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      doctor,
    },
  });
});

exports.deleteDoctor = catchAsync(async (req, res, next) => {
  const doctor = await User.findByIdAndDelete(req.params.id);

  if (!doctor) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
