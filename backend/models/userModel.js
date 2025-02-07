const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    full_name : {
        type : String,
        required  : [true, "Please add the contact name"]
    },
    username : {
        type : String,
        required  : [true, "Please add the username"]
    },
    password : {
        type : String,
        required  : [true, "Please add the password"]
    },
    email : {
        type : String,
        required  : [true, "Please add the contact email adresse"]
    },
    school_year : {
        type : String,
        enum : ["1CP", "2CP", "1CS", "2CS", "3CS"],
        required  : [true, "Please add the school year"]
    },
    skills : {
        type : [String],
        enum : ["frontend", "backend", "devops", "AI", "cybersecurity", "mobile"],
        default : [],
    },
    interests : {
        type : [String],
        enum : ["frontend", "backend", "devops", "AI", "cybersecurity", "mobile"],
        default : [],
    },
    receives_notification : {
        type : Boolean,
        default : true, 
    }
},{
    timestamps : true,
})

module.exports = mongoose.model("User", userSchema)