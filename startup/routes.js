const express = require("express");
const error = require("../middleware/error");
const wordsRouter = require("../routes/words");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/words/wordlist", wordsRouter);
  app.use(error);
};
