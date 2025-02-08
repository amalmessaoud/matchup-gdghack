const mongoose = require("mongoose");
// SkillExchange Model
const skillExchangeSchema = mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    skill1: String, // Skill user1 is teaching (e.g., "Python")
    skill2: String, // Skill user2 is teaching (e.g., "JavaScript")
    resources: [{
      uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      link: String,
      description: String,
    }],
    chat: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      message: String,
      timestamp: Date,
    }],
    progress: {
      user1Completed: { type: Boolean, default: false }, // Track if user1 finished teaching
      user2Completed: { type: Boolean, default: false }, // Track if user2 finished teaching
    },
  }, { timestamps: true });
  module.exports = mongoose.model("SkillExchange", skillExchangeSchema)
