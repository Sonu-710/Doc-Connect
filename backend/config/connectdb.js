const mongoose = require("mongoose");

exports.connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "DocConnect",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database connected successfully.....");
  } catch (error) {
    console.log(error);
  }
};
