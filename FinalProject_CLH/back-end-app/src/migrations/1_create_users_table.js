/**
 * Create table `users`.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('user_name', 30).notNull().unique();    
    table.string('email', 100).notNull().unique();
    table.string('password', 200).notNull();
    table.boolean('is_private').notNull().defaultTo(false);
    table.boolean('is_active').notNull().defaultTo(true);
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));    
  });
}

/**
 * Drop `users` table.
 *
 * @param {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}