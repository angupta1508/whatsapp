const express = require("express");
const MessageModel = require("../model/MessageModel");
const UserService = require("../services/UserService");
const { default: mongoose } = require("mongoose");

const saveMessage =  async (req, res) => {
    try {
        
        const { user_id, sender_id, message } = req.body;

        const mesObj = new MessageModel({
            user_id: mongoose.Types.ObjectId(user_id), 
            sender_id: mongoose.Types.ObjectId(sender_id),
            receiver_id: sender_id === "66c42d7abf8d846f8b4176dd" 
                ? mongoose.Types.ObjectId("66c42d7abf8d846f8b4176dd") 
                : mongoose.Types.ObjectId("6700b693c53de16036416c1c"),
            message,
        });
        const response = await mesObj.save();
        res.status(200).json({
            response,
            message: "Message Saved"
        });
    } catch (error) {
        console.log(error);
    }
};

const getChatHistory = async (req, res) => {
    try {
        const messages = await MessageModel.find();
        res.status(200).json({
            messages: messages
        });
    } catch (error) {
        console.log(error);
    }
};

const getUserList = async (req, res) => {
    try {
        const list = await UserService.getUserList();
        res.status(200).json(list);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getUserList,
    saveMessage,
    getChatHistory
};

