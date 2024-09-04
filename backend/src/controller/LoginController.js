const express = require("express");
const User = require("../model/UserModel");
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = {
    Login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                res.status(401).json({ status: false, message: "Invalid Crediential" })
            }
            // const checkPassword = await bcrypt.compare(password, user.password);
            // if (!checkPassword) {
            //     res.status(401).json({ status: false, message: "Invalid Crediential" })
            // }
            const token = await user.generateToken();
            await user.save();
            res.cookie('userToken', token, {
                httpOnly: false,
                maxAge: 24 * 60 * 60 * 1000,
            });
            res.status(201).json({
                status: true,
                user: user,
            })
        } catch (error) {
            console.log(error);
        }
    },

    Register: async (req, res) => {
        try {
            const { username, email, password, cpassword } = req.body;
            const userEmail = await User.findOne({ email });
            const userUsername = await User.findOne({ username });
            if (userEmail) {
                res.status(401).json({ status: false, message: "Email must be Unique" })
            }
            if (userUsername) {
                res.status(401).json({ status: false, message: "Username must be Unique" })
            }
            const userCollection = new User({
                username, email, password
            })
            await userCollection.generateToken();
            const user = await userCollection.save();
            res.status(201).json({
                status: true,
                user: user,
            })
        } catch (error) {
            console.log(error);
        }
    },

    ValidUser : async (req, res) => {
        try {
            const { _id } = req.query;
            if (!_id) {
                return res.status(400).json({
                    status: false,
                    message: "User ID is required"
                });
            }
    
            // Fetch the user from the database
            const validUser = await User.findOne({ _id });
    
            if (!validUser) {
                return res.status(401).json({
                    status: false,
                    message: "Invalid User"
                });
            }
    
            // If user is valid
            res.status(200).json({
                status: true,
                user: validUser,
                message: "User Authorized"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                message: "Internal Server Error"
            });
        }
    },
    
}