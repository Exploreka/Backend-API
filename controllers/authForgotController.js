const crypto = require('crypto');
const db = require("../models");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const User = db.users;

const dotenv = require("dotenv").config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL, // Ganti dengan email pengirim
        pass: process.env.PASSWORD, // Ganti dengan password email pengirim
    },
});


const ForgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // Cek apakah email terdaftar
        const user = await User.findOne({ where: { email_user: email } });
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }

        // Generate OTP dan mengatur tanggal kedaluwarsa
        const token = Math.floor(10000 + Math.random() * 90000); // Menggunakan OTP dengan 5 digit
        const expirationTime = new Date(Date.now() + 4 * 60 * 1000); // OTP berlaku selama 4 menit

        // Update informasi reset token pada user
        await user.update({
            refresh_token: token,
            resetTokenExpiresAt: expirationTime,
        });

        // Kirim email reset password dengan OTP
        await transporter.sendMail({
            from: process.env.EMAIL, // Ganti dengan email pengirim
            to: email,
            subject: 'Reset Password',
            text: `Your OTP Code: ${token}\n\nNote: please enter the OTP code immediately as it will expire within 4 minutes.`,
        });        

        return res.status(200).json({ message: 'OTP code sent successfully by email' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const ResetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    try {
        // Cek apakah email terdaftar
        const user = await User.findOne({ where: { email_user: email } });
        if (!user) {
            return res.status(404).json({ message: 'Email not found' });
        }

        // Cek apakah OTP valid
        if (user.refresh_token !== otp || user.resetTokenExpiresAt < new Date()) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(newPassword, salt);

        // Reset password
        await user.update({
            password_user: hashPassword,
            refresh_token: null,
            resetTokenExpiresAt: null,
        });

        return res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    ForgotPassword,
    ResetPassword
}
