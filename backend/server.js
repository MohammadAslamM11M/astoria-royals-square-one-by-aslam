const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const leadRoutes = require("./routes/LeadRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/leads", leadRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
