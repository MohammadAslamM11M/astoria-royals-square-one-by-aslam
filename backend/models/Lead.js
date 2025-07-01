const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNo: String,
  email: String,
  source: String,
  sourceDetail: String,
  preferences: String,
  remark: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lead", leadSchema);
