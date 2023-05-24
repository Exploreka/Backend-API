//importing modules
const express = require('express')
const { getUsers, Register, Login, Logout, refreshToken } = require('../Controllers/userController')
const { verifyToken } = require('../Middlewares/userAuth')

const router = express.Router()

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

module.exports = router
