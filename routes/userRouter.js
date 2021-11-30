const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.get('/:id', userController.getOneById)
router.post('/', userController.postOne)

module.exports = router