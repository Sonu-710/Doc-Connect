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
