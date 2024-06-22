const axios = require("axios");
const Slot = require("./../models/slotModel");
const Slots = require("./../models/slotModel");

exports.getAllSlots = async (req, res, next) => {
  try {
    const slots = await Slots.find({});
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
    const { address } = req.body;
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: address,
            format: "json",
          },
        }
      );

      if (response.data.length > 0) {
        const location = response.data[0];

        const locationData = response.data[0];
        const latitude = parseFloat(locationData.lat);
        const longitude = parseFloat(locationData.lon);

        req.location.coordinates[0] = latitude;
        req.location.coordinates[1] = longitude;
        req.location.address = address;
      } else {
        res.status(404).json({ error: "Address not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }

    const newSlot = await Slot.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: newSlot,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      err,
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
