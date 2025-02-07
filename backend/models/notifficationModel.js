// Notification Model
const notificationSchema = mongoose.Schema({
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["team_invite", "skill_exchange_request", "study_group_invite"],
    },
    message: String, // e.g., "You’ve been invited to join a frontend team for Hackathon X!"
    status: {
      type: String,
      enum: ["unread", "accepted", "declined"],
      default: "unread",
    },
    link: String, // e.g., "/team-request/123"
  }, { timestamps: true });