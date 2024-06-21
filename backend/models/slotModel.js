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
    type: String,
    require: ["true", "A slot must have a doctor"],
  },
});
const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
