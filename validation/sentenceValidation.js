const Joi = require("joi");

function validateSentence(sentence) {
  const Schema = Joi.object({
    sentence: Joi.string().min(5).max(50).required(),
  });

  return Schema.validate(sentence);
}

exports.validate = validateSentence;
