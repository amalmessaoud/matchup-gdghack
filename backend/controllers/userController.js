const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
//@description Get all contacts
//@route GET /api/contacts
//access public

const registerUser = asyncHandler(async (req, res) => {
    const { full_name, username, password, email, school_year, receives_notifications, skills, interests } = req.body;

    if (!full_name || !username || !password || !email || !school_year) {
        res.status(400);
        throw new Error("Fill mandatory fields!");
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists!");
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
        full_name,
        username,
        password: hashedPassword,
        email,
        school_year,
        receives_notifications: receives_notifications || true,
        skills: skills || [],
        interests: interests || []
    });

    console.log(`User created: ${user}`);

    if (user) {
        // Generate JWT Token
        const token = jwt.sign(
            {
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                },
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(201).json({
            _id: user.id,
            full_name: user.full_name,
            username: user.username,
            email: user.email,
            school_year: user.school_year,
            token,
        });
    } else {
        res.status(400);
        throw new Error("Failed to create user!");
    }
});
const loginUser =  asyncHandler(async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mendatory!");
    }
    const user = await User.findOne({email});
    if(user &&(await bcrypt.compare(password, user.password))){
        const token = jwt.sign({
            user : {
                email : user.email,
                username : user.username,
                id : user.id,
            }
        }, process.env.SECRET_KEY, {
            expiresIn : "1h",
            });
        res.status(200).json({token})
    } else{
        res.status(401);
        throw new Error("Invalid username or password");
    }
    
});

const getCurrentUser =  asyncHandler(async (req,res)=>{
    res.json({message : "cc mn current"})
});

module.exports = {registerUser, loginUser, getCurrentUser}