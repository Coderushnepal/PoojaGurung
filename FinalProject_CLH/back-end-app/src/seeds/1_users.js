export function seed(knex) {
    return knex('users').insert([
      {
        user_name: 'John',
        email: 'john.doe@domain.com',
        password: 'sam@password',
        is_private: false,
        is_active: true
      },
      {
        user_name: 'Preety',
        email: 'preety.doe@domain.com',
        password: 'sam@password',
        is_private: true,
        is_active: true
      },
      {
        user_name: 'Lily23',
        email: 'lily23@domain.com',
        password: 'sam@password',
        is_private: false,
        is_active: true
      }
    ]);
}