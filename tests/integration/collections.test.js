const request = require("supertest");
const config = require("config");

let server;

describe(" GET / all collectionNames", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  describe("GET /", () => {
    it("should return all collection names  ", async () => {
      const response = await request(server).get(
        config.get("collectionNamesEndpoint")
      );

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(2);
    });
    it("should handle failed request", async () => {
      const response = await request(server).get("/invalidEndpoint");

      expect(response.status).toBe(404);
    });
  });
});
