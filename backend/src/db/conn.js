const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp").then(()  =>  {
    // console.log("Connect Database");
}).catch((e) => {
    // console.log(e);
})