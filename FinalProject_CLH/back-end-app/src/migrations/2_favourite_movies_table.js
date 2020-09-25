/**
 * Create table `favourite_movies`.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('favourite_movies', table => {
    table.increments('id');
    table
        .integer('user_id')
        .notNull()
        .references('id')
        .inTable('users');
    table.string('movie_name', 50).notNull();    
    table.integer('movie_year').notNull();
    table.smallint('rate').notNull();
    table.string('reviews', 500).notNull();
    table.boolean('is_private').notNull().defaultTo(false);
    table.boolean('is_active').notNull().defaultTo(true);
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));  
  });
}

/**
 * Drop `table_name`.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('favourite_movies');
}