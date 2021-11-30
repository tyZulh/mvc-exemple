const {
  findAll, findOneById, createOne
} = require('../models/userModel');

const getAll = async (req, res) => {
  try {
    const result = await findAll()
    res.status(200).json(result)
  } catch(err) {
    res.status(500).send(`internal server error : ${err.message}`)
  }
}

const getOneById = async (req, res) => {
  try {
    const result =await findOneById(req.params.id)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`)
  }
}

const postOne = async (req, res) => {
  try {
    const result = await createOne(req.body)
    res.status(201).json(result)
  } catch (err) {
    res.status(500).send(`internal server error : ${err.message}`)
  }
}

module.exports = {
  getAll,
  getOneById,
  postOne
}