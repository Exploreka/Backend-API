const express = require('express');
const controller = require("../controllers/authForgotController");
const router = express.Router();

// Mengirim email reset password dengan OTP
router.post('/forgot_password', controller.ForgotPassword);

// Mengecek OTP dan mereset password
router.post('/reset_password', controller.ResetPassword);

module.exports = router;
