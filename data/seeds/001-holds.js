exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("holds")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("holds").insert([
        { id: 1, hold_type: "jug", size_in_cm: "10", color: "blue" },
        { id: 2, hold_type: "edge", size_in_cm: "3", color: "red" },
        { id: 3, hold_type: "crimp", size_in_cm: "1", color: "yellow" }
      ]);
    });
};
