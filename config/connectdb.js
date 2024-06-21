const mongoose = require("mongoose");

exports.connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "crypto",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("database connected successfully.....");
  } catch (error) {
    console.log(error);
  }
};
