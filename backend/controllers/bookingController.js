const Booking = require("./../models/bookingModel");
const Slot = require("./../models/slotModel");
const AppError = require("./../utils/AppError");

exports.createBooking = async (req, res, next) => {
  try {
    const slot = await Slot.findById(req.body.slot);
    if (!slot) {
      return next(new AppError("Slot not found", 404));
    }

    console.log(req.body);
    req.body.patient = req.user._id;
    req.body.doctor = slot.doctor; // no need to access _id, it's already an ObjectId
    console.log(req.body);

    if (slot.bookings === 0) {
      return next(new AppError("No more patients", 400));
    }

    await Slot.findByIdAndUpdate(
      req.body.slot,
      { $inc: { bookings: -1 } },
      { new: true, runValidators: true }
    );

    const booking = await Booking.create(req.body);
    res.status(201).json({
      status: "success",
      booking,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      err,
    });
  }
};
