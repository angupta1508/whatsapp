const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase:true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_image:{
        type:String,
    },
    tokens: [{
        token: {
            type: String,
        }
    }]
});


userSchema.methods.generateToken = async function (next) {
    try {
        const token = await jwt.sign({ "_id": this._id.toString(), "username": this.username, "email": this.email }, process.env.JWT_SECRET,{ expiresIn: '1h' });
        this.tokens = this.tokens.concat({token})
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

userSchema.pre("save", async function( next) {
    try {
        if(this.isModified("password"))
        {
            this.password = await bcrypt.hash(this.password,10);
        }  
        next();      
    } catch (error) {
        console.log(error);
    }
});


const User = new mongoose.model("user",userSchema);

module.exports = User;