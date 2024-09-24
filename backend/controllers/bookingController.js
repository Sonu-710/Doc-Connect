const Booking = require("./../models/bookingModel");
const Slot = require("./../models/slotModel");
const AppError = require("./../utils/AppError");

exports.createBooking = async (req, res, next) => {
  try {
    const slot = await Slot.findById(req.params.id);
    if (!slot) {
      res.status(404).json({
        status: "failure",
        message: "Error in getting slot",
      });
    }

    console.log(req.body);
    req.body.slot=req.params.id;
    req.body.patient = req.user._id;
    req.body.doctor = slot.doctor;
    console.log(req.body);

    if (slot.bookings === 0) {
      res.status(400).json({
        status: "failure",
        message: "Bookings are no more open for this slot",
      });
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
