const Joi = require("joi");
const { validate } = require("../../validation/sentenceValidation");

describe("validateSentence", () => {
  it("should return validation result for a valid sentence", () => {
    const sentence = {
      sentence: "Hello, world!",
    };

    const validationResult = validate(sentence);

    expect(validationResult.error).toBeUndefined();
    expect(validationResult.value).toEqual(sentence);
  });

  it("should return validation error for a sentence shorter than 5 characters", () => {
    const sentence = {
      sentence: "Hi",
    };

    const validationResult = validate(sentence);

    expect(validationResult.error).toBeDefined();
    expect(validationResult.error.details[0].message).toContain(
      " length must be at least 5 characters long"
    );
  });

  it("should return validation error for a sentence longer than 50 characters", () => {
    const sentence = {
      sentence:
        "This is a very long sentence that exceeds the maximum allowed length of 50 characters.",
    };

    const validationResult = validate(sentence);

    expect(validationResult.error).toBeDefined();
    expect(validationResult.error.details[0].message).toContain(
      "length must be less than or equal to 50 characters long"
    );
  });

  it("should return validation error for a missing sentence", () => {
    const sentence = {};

    const validationResult = validate(sentence);

    expect(validationResult.error).toBeDefined();
    expect(validationResult.error.details[0].message).toContain("required");
  });
});
