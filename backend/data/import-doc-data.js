const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Doc = require("./../models/user");
const Slots = require("./../models/slotModel");
const connectDB = require("./../config/connectdb");

dotenv.config({ path: "./config.env" });

console.log("DATABASE:", process.env.DATABASE_URL);
console.log("DATABASE_PASSWORD:", process.env.DATABASE_PASSWORD);

const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
// console.log("DATABASE_PASSWORD:", process.env.DATABASE_PASSWORD);

connectDB.connectDB(DB);

// Read JSON file
// const docs = JSON.parse(fs.readFileSync(`${__dirname}/doc-data.json`, "utf-8"));
// console.log(docs);
// Import Data INTO DATABASE
const importData = async () => {
  try {
    // await Doc.create(docs);
    console.log(slots);
    // await Slots.create(slots);
    console.log("Data Successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  //   process.exit();
};

// DELETE ALL DATA FROM COLLECTION....
const deleteData = async () => {
  try {
    await Slots.deleteMany();
    console.log("Data Successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  //   process.exit();
};

console.log(process.argv);

deleteData();
// importData();
