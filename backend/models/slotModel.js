const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  town: {
    type: String,
    require: ["true", "a slot must have a town"],
  },
  houseNumber: {
    type: String,
    require: ["true", "a slot must have a House No."],
  },
  street: {
    type: String,
    require: ["true", "a slot must have a street No."],
  },
  postcode: {
    type: Number,
    require: ["true", "a slot must have a postcode"],
  },
  city: {
    type: String,
    require: ["true", "a slot must have a city"],
  },
  State: {
    type: String,
    require: ["true", "a slot must have a State"],
  },
  Country: {
    type: String,
    default: "India",
  },
  startTime: {
    type: String,
    require: ["true", "There should be a start Time"],
  },
  endTime: {
    type: String,
    require: ["true", "There should be a start Time"],
  },
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
  },
  doctor: {
    type: String,
    require: ["true", "A slot must have a doctor"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
slotSchema.index({ startLocation: "2dsphere" });
const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
