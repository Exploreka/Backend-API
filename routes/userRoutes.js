//importing modules
const express = require('express')
const { getUserId, getUsers, Register, Login, Logout, refreshToken } = require('../Controllers/userController')
const { verifyToken } = require('../Middlewares/userAuth')
const {authGoogle, callbackGoogle, protected, logout, failed} = require("../controllers/userController");

const router = express.Router()

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.get('/users', getUsers);
router.get('/users/:id', getUserId);
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/auth/google', authGoogle)
router.get('/auth/google/callback', callbackGoogle)
router.get('/protected', isLoggedIn ,protected)
router.get('/logout', logout)
router.get('/auth/google/failure', failed)

module.exports = router
