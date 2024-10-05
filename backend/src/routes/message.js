const express = require("express");
const { ValidUser } = require("../controller/LoginController");
const { getUserList,saveMessage,getChatHistory } = require("../controller/MessageController");
const router = express.Router();

router.post("/save-message",ValidUser,saveMessage);
router.get("/getChatHistory",ValidUser,getChatHistory);
router.get('/user-list',getUserList);

module.exports = router;