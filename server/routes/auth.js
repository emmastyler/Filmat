const express = require('express')
const router = express.Router()
const {login, register} = require('../controllers/authcontroller')
const { verifyToken } = require('../middleware/verify')



router.post('/login', verifyToken, login)
router.post('/register', register)


module.exports = router