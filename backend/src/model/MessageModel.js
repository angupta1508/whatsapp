const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    sender_id: {
        type: String,
        required: true
    },
    receiver_id: {
        type: String,
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