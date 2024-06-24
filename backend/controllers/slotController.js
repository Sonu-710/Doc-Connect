const axios = require("axios");
const Slot = require("./../models/slotModel");
const Slots = require("./../models/slotModel");

exports.getAllSlots = async (req, res, next) => {
  try {
    const slots = await Slots.find({ doctor: req.user.id });
    res.status(200).json({
      status: "success",
      data: {
        result: slots.length,
        data: slots,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      err,
    });
  }
};

exports.createSlot = async (req, res, next) => {
  try {
    req.body.doctor = req.user._id;

    const { town, houseNumber, street, postcode, city, State, Country } =
      req.body;
    const URL = `https://api.geoapify.com/v1/geocode/search?name=${town}&housenumber=${houseNumber}&street=${street}%20Road&postcode=${postcode}&city=${city}&state=${State}&country=${Country}&format=json&apiKey=${process.env.LOCATION_API_KEY}`;

    const response = await axios.get(URL);
    const location = response.data.results[0];

    req.body.location = {
      type: "Point",
      coordinates: [location.lon, location.lat],
    };

    const newSlot = await Slot.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        slot: newSlot,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create slot",
      error: error.message,
    });
  }
};

exports.updateSlot = async (req, res, next) => {
  try {
    const updatedSlot = await Slot.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data: updatedSlot,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      err,
    });
  }
};

exports.deleteSlot = async (req, res, next) => {
  try {
    const updatedSlot = await Slot.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      err,
    });
  }
};
