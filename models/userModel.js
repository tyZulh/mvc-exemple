const mysql = require('../config');

const findAll = async () => {
  const result = await mysql.query('SELECT * FROM user');
  return result[0]
}

const findOneById = async (id) => {
  const result = await mysql.query('SELECT * FROM user WHERE id = ?', [id])
  return result[0]
}

const createOne = async (user) => {
  const result = await mysql.query('INSERT INTO user SET ?', [user])
  console.log(result[0]);
  const newUser = await findOneById(result[0].insertId)
  return newUser[0]
}

module.exports = {
  findAll,
  findOneById,
  createOne
}