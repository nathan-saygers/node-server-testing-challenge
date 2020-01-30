exports.up = function(knex) {
  return knex.schema.createTable("holds", tbl => {
    tbl.increments();
    tbl.string("hold_type", 255).notNullable();
    tbl.integer("size_in_cm");
    tbl.string("color", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("holds");
};
