const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    }
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel ;