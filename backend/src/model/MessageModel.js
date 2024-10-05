const mongoose = require("mongoose");
const User = require("../model/UserModel.js");

const MessageSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required: true
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})
const MessageModel = new mongoose.model("message",MessageSchema);
module.exports = MessageModel;