const express = require('express');
const controller = require("../controllers/authForgotController");
const router = express.Router();

// Mengirim email reset password dengan OTP
router.post('/forgotpassword', controller.ForgotPassword);

// Mengecek OTP dan mereset password
router.post('/resetpassword', controller.ResetPassword);



module.exports = router;
