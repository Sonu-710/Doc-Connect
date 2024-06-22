const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Slot",
    required: [true, "A booking must be associated with a slot"],
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A booking must be associated with a doctor"],
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A booking must be associated with a doctor"],
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
