const express = require("express");
const MessageModel = require("../model/MessageModel");
const router = new express.Router();

router.post("/save-message", async (req, res) => {
    try {
        console.log(req.body);
        
        const mesObj = new MessageModel({ ...req.body });
        const response = await mesObj.save();
        res.status(200).json({
            response,
            message:"Message Saved"
        })
    } catch (error) {
        console.log(error);
        
    }
})

router.get("/getChatHistory", async (req,res) => {
    try {
        // let {chat_id } = req.params;
        const messages = await MessageModel.find();
        res.status(200).json({
            messages : messages
        });
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router;
