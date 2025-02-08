const mongoose = require("mongoose");
// TeamRequest Model
const teamRequestSchema = mongoose.Schema({
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hackathonName: String, // Optional (e.g., "Hack the North")
    requiredRoles: [{
      skill: String, // e.g., "frontend"
      count: Number, // e.g., 2
    }],
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    proposedMembers: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
    }],
  }, { timestamps: true });
  

module.exports = mongoose.model("TeamRequest", teamRequestSchema)
