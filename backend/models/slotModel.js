const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  location: {
    type: String,
    require: ["true", "a slot must have a location"],
  },
  startTime: String,
  endTime: String,
  bookings: {
    type: Number,
    min: 1,
    require: ["true", "no of bookings allowed need to be mentioned"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "slot must belong to a doctor"],
  },
});
const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
