const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profile_pic:{
       type: String,
    },
    friends:{
        type: Array,
        default:[] 
    },
    requests:{
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("user",userSchema);