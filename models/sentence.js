const mongoose = require("mongoose");

const Sentence = mongoose.model(
  "Sentence",
  new mongoose.Schema({
    sentence: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 350,
    },
  })
);

exports.Sentence = Sentence;
