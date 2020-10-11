const express = require('express')
const router = express.Router()
const controller = require('../Controllers/user.controller')

router.get('/', controller.index)
router.get('/search', controller.search)
router.get('/:id', controller.view)
router.post('/create', controller.create)
module.exports = router