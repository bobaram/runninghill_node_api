const { Sentence } = require("../models/sentence");
const { validate } = require("../validation/sentenceValidation");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let sentence = new Sentence({
    sentence: req.body.sentence,
  });
  sentence = await sentence.save();

  return res.send(sentence);
});

router.get("/", async (req, res) => {
  const sentences = await Sentence.find({});
  return res.status(200).send(sentences);
});

module.exports = router;
