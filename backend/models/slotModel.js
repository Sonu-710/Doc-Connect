const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  address: {
    type: String,
    require: ["true", "a slot must have a address"],
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
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
  },
  doctor: {
    type: String,
    require: ["true", "A slot must have a doctor"],
  },
});
slotSchema.index({ startLocation: "2dsphere" });
const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
