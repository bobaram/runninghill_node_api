const express = require("express");
const error = require("../middleware/error");
const wordsRouter = require("../routes/words");
const sentenceRouter = require("../routes/sentences");
const config = require("config");

module.exports = function (app) {
  app.use(express.json());
  app.use(config.get("wordsEndpoint"), wordsRouter);
  app.use(config.get("sentencesEndpoint"), sentenceRouter);
  app.use(error);
};
