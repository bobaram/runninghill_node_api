const request = require("supertest");
const { Sentence } = require("../../models/sentence");
const config = require("config");
let server;
describe("POST / /api/words/sentences", () => {
  let sentence;

  const exec = async () => {
    return await request(server)
      .post(config.get("sentencesEndpoint"))
      .send({ sentence });
  };

  beforeEach(() => {
    server = require("../../index");
    sentence = "I am a boy!";
  });

  afterEach(async () => {
    // await server.close();

    await new Promise((resolve) => server.close(resolve));

    await Sentence.deleteMany({});
  });

  describe("POST /", () => {
    it("should return 400 if sentence is less than 5 characters", async () => {
      sentence = "I am";

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should return 400 if sentence is more than 50 characters", async () => {
      sentence = new Array(52).join("a");

      const res = await exec();

      expect(res.status).toBe(400);
    });

    it("should save the sentence if it is valid", async () => {
      await exec();

      const sentence = await Sentence.find({ sentence: "I am a boy!" });

      expect(sentence).not.toBeNull();
    });

    it("should return the sentence if it is valid", async () => {
      const res = await exec();

      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("sentence", "I am a boy!");
    });
  });
  describe(" GET /", () => {
    it("should return all sentences", async () => {
      const sentences = [
        { sentence: "I am a man" },
        { sentence: "I am from asia" },
      ];
      await Sentence.collection.insertMany(sentences);

      const res = await request(server).get("/api/words/sentences");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(
        res.body.some((g) => g.sentence === sentences[0].sentence)
      ).toBeTruthy();
      expect(
        res.body.some((g) => g.sentence === sentences[1].sentence)
      ).toBeTruthy();
    });
  });
});
