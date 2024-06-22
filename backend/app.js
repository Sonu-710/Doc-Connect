const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb");
const userRouter = require("./routes/userRoutes");
const doctorRouter=require('./routes/doctor')

dotenv.config({ path: "./config.env" });

const app = express();

// cors policy
app.use(cors());

// database connection
const DATABASE_URL = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
connectDB.connectDB(DATABASE_URL);

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Routes
app.use("/api/user", userRouter);
app.use('/api/doctors',doctorRouter);

const PORT = 3000 || process.env.PORT;

console.log(`Environment : ${app.get("env")}`);

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
