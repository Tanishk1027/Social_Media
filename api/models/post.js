const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user:{
      type: String,
      required: true
    },
    desc:{
       type: String
    },
    img:{
       type: String
    },
    likes:{
       type: Array,
       default: []
    }
})