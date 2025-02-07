const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
const User = require("../models/userModel")
//@description Get all contacts
//@route GET /api/contacts
//access public

const registerUser =  asyncHandler(async (req,res)=>{
    const {full_name,username, password, email, school_year, receives_notifications, skills, interests} = req.body;
    if (!full_name || !username || !password || !email || !school_year){
        res.status(400).json;
        throw new Error("Fill mendatory fields!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        ...req.body,
        password : hashedPassword,
    })
    console.log(`User created : ${user}`)
    if(user){
        res.status(201).json({_id : user.id, email:user.email})
    }
    else{
        res.status(400)
        throw new Error("Failed to create user!")
    }
});

const loginUser =  asyncHandler(async (req,res)=>{
    res.json({message : "cc mn login"})
});

const getCurrentUser =  asyncHandler(async (req,res)=>{
    res.json({message : "cc mn current"})
});

module.exports = {registerUser, loginUser, getCurrentUser}