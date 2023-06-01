const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  type: String,
  word: String,
});

module.exports = wordSchema;
