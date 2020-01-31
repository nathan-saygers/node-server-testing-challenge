const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove,
  getAll
};

async function insert(hold) {
  return db("holds").insert(hold, "id");
}

function remove(id) {
  return db("holds")
    .where({ id })
    .del();
}

function getAll() {
  return db("holds");
}
