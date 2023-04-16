const express = require('express')
const router = express.Router()
const controllerHome = require('../controller/home')

router.get('/', controllerHome.home)

module.exports = router