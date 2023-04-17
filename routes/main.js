const express = require('express')
const router = express.Router()
const controllerHome = require('../controllers/home')

router.get('/', controllerHome.home)

module.exports = router