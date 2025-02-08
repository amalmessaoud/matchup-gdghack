const mongoose = require("mongoose");
// StudyGroup Model
const studyGroupSchema = mongoose.Schema({
    topic: {
      type: String,
      required: true, // e.g., "React Basics"
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
    },
    //availability: [String], // Specific to the group: ["Mon 2-4pm", "Wed 10am-12pm"]
    roadmap: {
      type: [{
        title: String, // e.g., "Week 1: HTML/CSS Basics"
        resources: [String], // Links to tutorials, PDFs
      }],
      default: [],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    chat: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      message: String,
      timestamp: Date,
    }],
    questions: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
      answers: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: String,
      }],
    }],
  }, { timestamps: true });

module.exports = mongoose.model("StudyGroup", studyGroupSchema)