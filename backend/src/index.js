const express = require("express");
require('dotenv').config()
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
require("./db/conn");
const MessageRouter = require("./controller/MessageController");
const loginRouter = require("./routes/user");
const MessageModel = require("./model/MessageModel");

const app = express();


const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
};

// Enable CORS for Express routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions));
app.use(loginRouter);
app.use(MessageRouter);

const server = http.createServer(app);

// Pass CORS options directly to Socket.io
const io = socketio(server, {
    cors: corsOptions
});

io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("joinRoom", (userId) => {
        socket.join(userId);
        socket.userId = userId;
    });

    socket.on("sendMessage", async (options, callback) => {
        try {
            // Save the message to the database
            const mesObj = new MessageModel({ ...options });
            const savedMessage = await mesObj.save();
            io.emit("receiveMessage", savedMessage);
            callback();
        } catch (error) {
            console.error("Error saving message:", error);
            // If there's an error, you could call the callback with an error message
            callback(error);
        }
    });

    socket.on("disconnect", () => {
        console.log("Socket disconnected");
    });
});

server.listen(8001, () => {
    console.log("Server is running on port 8001");
});
