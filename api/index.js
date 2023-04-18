const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

mongoose.connect("mongodb+srv://Tanishk:sL7Jiha3FCLmwh7@cluster0.gehhe.mongodb.net/Socialmedia?retryWrites=true&w=majority", { useNewUrlParser: true }).then(console.log("Connected to database")).catch((err) => console.log(err));


const cors = require("cors");

app.use(cors());


app.use(express.json());

app.use("/auth",authRoute);
app.use("/user",userRoute);

app.listen("5000",(req,res)=>{
    console.log("success");
})