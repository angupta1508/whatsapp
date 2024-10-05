const express = require("express");
const MessageModel = require("../model/MessageModel");
const { default: mongoose } = require("mongoose");




  
const getUserList = async ($data) => {
    const { userID } = $data;
    try {
        // const data = await MessageModel.aggregate([
        //     {
        //         $match: { sender_id: id }  
        //     },
        //     {
        //         $lookup: {
        //             from: "users",
        //             let: { senderId: { $toObjectId: "$sender_id" } },  // Convert sender_id to ObjectId
        //             pipeline: [
        //                 { $match: { $expr: { $eq: ["$_id", "$$senderId"] } } }
        //             ],
        //             as: "sender_user"
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: "users",
        //             let: { receiverId: { $toObjectId: "$receiver_id" } },  // Convert receiver_id to ObjectId
        //             pipeline: [
        //                 { $match: { $expr: { $eq: ["$_id", "$$receiverId"] } } }
        //             ],
        //             as: "receiver_user"
        //         }
        //     },
        //     {
        //         $project: {
        //             _id: 0,
        //             "sender_user.name": 1,
        //             "sender_user.email": 1,
        //             "receiver_user.name": 1,
        //             "receiver_user.email": 1,
        //         }
        //     }
        // ]);

        // const data = await MessageModel.find({
        //     $or:[
        //         {sender_id:user_id},
        //         {receiver_id:user_id}
        //     ]
        // })
        // .populate('sender_data','username email -_id')
        // .populate('receiver_data','username email -_id')

        const data = await MessageModel.aggregate([
            {
                $match:{
                    $or:[
                        {sender_id: new mongoose.Types.ObjectId(userID)},
                        {receiver_id: new mongoose.Types.ObjectId(userID)},
                    ]
                },
            },
            // {
            //     $lookup:{
            //         from:"users",
            //         localField:"sender_id",
            //         foreignField:"_id",
            //         as:"sender_data"
            //     }
            // },
            {
                $lookup:{
                    from:"users",
                    localField:"receiver_id",
                    foreignField:"_id",
                    as:"receiver_data"      
                }
            },
            // {
            //     $unwind:'$sender_data'
            // },
            {
                $unwind:'$receiver_data'
            },
            {
                $project:{
                    _id:1,
                    user_id:1,
                    // sender_username:"$sender_data.username",
                    // sender_email:"$sender_data.email",
                    username:"$receiver_data.username",
                    email:"$receiver_data.email",
                    message:1,
                    createdAt: 1,
                    updatedAt: 1,
                }
            }
        ]);

        return data;
    } catch (error) {
        console.log("User service user list", error);
    }
};



module.exports = {
    getUserList,  // Export as part of an object
};



