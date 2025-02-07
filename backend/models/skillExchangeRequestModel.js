// SkillExchange Model
const skillExchangeRequestSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    skill1: String, // Skill user1 is teaching (e.g., "Python")
    skill2: String, // Skill user2 is teaching (e.g., "JavaScript")
  }, { timestamps: true });
  module.exports = mongoose.model("SkillExchangeRequest", skillExchangeRequestSchema)
