const express = require('express')
const router = express.Router()
const { Hello } = require("../controllers/cotroller");


router.get('/hello',Hello)

module.exports =router;