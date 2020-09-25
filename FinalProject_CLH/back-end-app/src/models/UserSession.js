import connection from '../db';

const table = 'user_sessions';

export async function saveToken(userId, token) {
  return connection.insert({ user_id: userId, token: token }).into(table);
}

