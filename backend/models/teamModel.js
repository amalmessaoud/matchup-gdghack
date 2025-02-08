const mongoose = require("mongoose");
  // Team Model (created once team is finalized)
  const teamSchema = mongoose.Schema({
    members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    roles: Map, // e.g., { "user123": "frontend", "user456": "backend" }
    projectDescription: String,
    chat: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      message: String,
      timestamp: Date,
    }],
  }, { timestamps: true });

  module.exports = mongoose.model("Team", teamSchema)