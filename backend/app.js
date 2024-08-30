const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctor");
const slotsRouter = require("./routes/slots");
const patientRouter = require("./routes/patient");
const bookingRouter = require("./routes/booking");

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
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Routes
app.use("/api/user", userRouter);
app.use("/api/patients", patientRouter);
app.use("/api/doctors", doctorRouter);
app.use("/api/slots", slotsRouter);
app.use("/api/booking", bookingRouter);

const PORT = 3000 || process.env.PORT;

console.log(`Environment : ${app.get("env")}`);

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
