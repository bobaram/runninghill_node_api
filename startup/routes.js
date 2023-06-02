const express = require("express");
const error = require("../middleware/error");
const wordsRouter = require("../routes/words");
const sentenceRouter = require("../routes/sentences");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/words/wordlist", wordsRouter);
  app.use("/api/words/sentence", sentenceRouter);
  app.use(error);
};
