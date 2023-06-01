const express = require("express");
const router = express.Router();
const wordSchema = require("../models/word");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  const wordType = req.query.type;

  const collectionName = wordType.toLowerCase(); // Convert word type to lowercase
  const WordModel = mongoose.model(collectionName, wordSchema); // Create a dynamic model based on the collection name

  const words = await WordModel.find({});
  return res.status(200).send(words);
});

module.exports = router;
