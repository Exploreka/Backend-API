//importing modules
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator')

// Assigning users to the variable User
const User = db.users;

const getUsers = async(req, res) => {
    try {
        const users = await User.findAll({
            attributes:['id_user', 'username_user', 'email_user']
        });
        res.json(users);
    } catch (e) {
        console.log(e);
    }
}

const Register = async(req, res) => {
    const { username, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.stat(400).json({msg: "password and password confirmation invalid"});
    // if(User.findOne({email:email})) {
    //     res.json({msg: "email already exist"});
    //     return;
    // }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        if(username !== "" && email !== "" && hashPassword !== ""){
            await User.create({
                username_user: username,
                email_user: email,
                password_user: hashPassword
            });
            res.json({msg: "Your account has been created!"});
        } else {
            return res.json({msg: "form cannot null"});
        }
    } catch (error) {
        console.log(error);
    }
}

const Login = async(req, res) => {
    try {
        const user = await User.findAll({
            where:{
                email_user: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password_user);
        if(!match) return res.status(400).json({msg: "Password invalid"});
        const userId = user[0].id_user;
        const username = user[0].username_user;
        const email = user[0].email_user;
        const accessToken = jwt.sign({userId, username, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '180s'
        });
        const refreshToken = jwt.sign({userId, username, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await User.update({refresh_token: refreshToken},{
            where:{
                id_user: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email invalid"});
    }
}

const Logout = async(req, res) => {
    const refreshToken = req.cookies.refresh_token;
    if(!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id_user;
    await User.update({refresh_token: null},{
        where:{
            id_user: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refresh_token;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id_user;
            const username = user[0].username_user;
            const email = user[0].email_user;
            const accessToken = jwt.sign({userId, username, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '180s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers,
    Register,
    Logout,
    Login,
    refreshToken
};
