const express = require('express')
const router = express.Router()
const controllerApi = require('../controller/api')

router.get('/api/:rapperName', controllerApi.rapper)

module.exports = router