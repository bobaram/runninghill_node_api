const { validate } = require("../../validation/sentenceValidation");

test("validates a sentence successfully", () => {
  const sentence = { sentence: "This is a valid sentence." };
  const result = validate(sentence);
  expect(result.error).toBeUndefined();
  expect(result.value).toEqual(sentence);
});

test("returns an error for invalid sentence length", () => {
  const sentence = { sentence: "I am" };
  const result = validate(sentence);
  expect(result.error).toBeDefined();
  expect(result.error.details[0].message).toBe(
    '"sentence" length must be at least 5 characters long'
  );
});
