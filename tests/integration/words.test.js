const mongoose = require("mongoose");
const request = require("supertest");
const wordSchema = require("../../models/word");
let wordType;
let collectionName;
let WordModel;

const words = require("./words.data");
let server;

const ModelObject = (wordType) => {
  return {};
};

describe("/api/words/wordlist", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await server.close();
    await WordModel.deleteMany({});
    WordModel = " ";
    collectionName = " ";
  });

  describe("GET /", () => {
    it("should return all words of the given type query string ", async () => {
      wordType = "nouns";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });
    it("should return all words of the given type query string ", async () => {
      wordType = "verbs";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });
    it("should return all words of the given type query string ", async () => {
      wordType = "adjectives";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });

    it("should return all words of the given type query string ", async () => {
      wordType = "prepositions";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });

    it("should return all words of the given type query string ", async () => {
      wordType = "conjunctions";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });

    it("should return all words of the given type query string ", async () => {
      wordType = "adverbs";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });

    it("should return all words of the given type query string ", async () => {
      wordType = "exclamations";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });

    it("should return all words of the given type query string ", async () => {
      wordType = "determiners";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });

    it("should return all words of the given type query string ", async () => {
      wordType = "pronouns";
      collectionName = wordType.toLowerCase();
      WordModel = mongoose.model(collectionName, wordSchema);
      await WordModel.collection.insertMany(words[wordType]);

      const res = await request(server).get(
        `/api/words/wordlist?type=${wordType}`
      );

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.word === words[wordType][0].word)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.word === words[wordType][1].word)
      ).toBeTruthy();
    });
  });
});
