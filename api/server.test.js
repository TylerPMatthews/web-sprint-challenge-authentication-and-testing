const request = require("supertest");
const db = require("../data/dbConfig.js");
const server = require("./server.js");

// Write your tests here

const tyler = {
  username: "tyler1234",
  password: "test",
};

describe("Server auth", () => {
  beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  beforeEach(async () => {
    await db("users").truncate();
  });

  afterAll(async () => {
    await db.destroy();
  });
  describe("[post] /register", () => {
    it("Responds with 201 status code", async () => {
      const res = await request(server).post("/register").send(tyler);
      expect(res.status).toBe(201);
    });
  });
  describe("[post] /login", () => {
    it("Responds with 201 status code", async () => {
      const res = await request(server).post("/login").send(tyler);
      expect(res.status).toBe(201);
    });
  });
  describe("Jokes responds with status code 200", async () => {
    const res = await request(server).get("/jokes");
    expect(res.staus).toBe(200);
  });
});
