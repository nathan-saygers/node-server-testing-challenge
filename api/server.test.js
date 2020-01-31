const request = require("supertest");
const server = require("./server.js");

describe("server", function() {
  it("runs the tests", function() {
    return expect(true).toBe(true);
  });

  describe("Get /", function() {
    it("vanilla get request returns 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return sweet sends message", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.message).toEqual("sweet send");
        });
    });
    it("should return json", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch("json");
        });
    });
  });
});
