const request = require("supertest");
const { Sentence } = require("../../models/sentence");

let server;
describe("POST / /api/words/sentence", () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let sentence;

  console.log(server, "sentence");

  const exec = async () => {
    return await request(server).post("/api/words/sentence").send({ sentence });
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

      const genre = await Sentence.find({ sentence: "I am a boy!" });

      expect(sentence).not.toBeNull();
    });

    it("should return the sentence if it is valid", async () => {
      const res = await exec();

      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("sentence", "I am a boy!");
    });
  });
});
