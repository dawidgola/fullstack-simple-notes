const express = require('express')
const router = express.Router()

const {homepage} = require('../actions/api/test')

router.get('/',homepage)


module.exports = router