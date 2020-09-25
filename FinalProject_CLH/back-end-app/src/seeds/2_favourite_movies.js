export function seed(knex) {
    return knex('favourite_movies').insert([
      {
        user_id: '1',
        movie_name: 'Nai Na BhanuLa 3',
        movie_year: '2011',
        rate: '3',
        reviews: 'Nice Job',
        is_private: false,
        is_active: true
      },
      {
        user_id: '1',
        movie_name: 'Dhanapati',
        movie_year: '2010',
        rate: '3',
        reviews: 'Nice Movie',
        is_private: true,
        is_active: true
      },
      {
        user_id: '2',
        movie_name: 'Loot',
        movie_year: '2012',
        rate: '5',
        reviews: 'Nice Job and all is good.',
        is_private: false,
        is_active: true
      }
    ]);
}