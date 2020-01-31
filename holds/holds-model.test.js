const Holds = require("./holds-model.js");
const db = require("../data/dbConfig.js");

describe("holds model", function() {
  beforeEach(async () => {
    await db("holds").truncate();
  });

  describe("runs in test environment", function() {
    it("should run in the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("insert helper", function() {
    it("adds a new hold to the database", async function() {
      await Holds.insert({ hold_type: "sloper" });
      await Holds.insert({ hold_type: "crimper" });
      await Holds.insert({ hold_type: "pinch" });
      const holds = await db("holds");

      expect(holds.length).toBeGreaterThan(2);
    });
  });
  describe("remove helper", function() {
    it("removes a hold from the database", async function() {
      await Holds.insert({ hold_type: "sloper" });
      await Holds.insert({ hold_type: "crimper" });
      await Holds.remove(1);
      await Holds.remove(2);
      const holds = await db("holds");

      expect(holds).toHaveLength(0);
    });
  });
});
