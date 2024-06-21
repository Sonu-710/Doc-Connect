const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectdb");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// cors policy
app.use(cors());

// database connection
connectDB.connectDB(DATABASE_URL);
// JSON
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
