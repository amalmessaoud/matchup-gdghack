const StudyGroup = require("../models/studyGroupeModel"); // Import your model
const mongoose = require("mongoose");

// Join or Create a Study Group
const joinOrCreateStudyGroup = async (req, res) => {
    console.log("kech haja");
  try {
    const { userId, topic, level } = req.body;

    if (!userId || !topic || !level) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Try to find an existing study group with the same topic and level
    let existingGroup = await StudyGroup.findOne({ topic, level });

    if (existingGroup) {
      // Add user to the existing group (if not already a member)
      if (!existingGroup.members.includes(userId)) {
        existingGroup.members.push(new mongoose.Types.ObjectId(userId));
        await existingGroup.save();
      }

      return res.status(200).json({ message: "Joined existing study group", group: existingGroup });
    }

    // If no matching group, create a new one
    const newGroup = new StudyGroup({
      topic,
      level,
      createdBy: new mongoose.Types.ObjectId(userId),
      members: [new mongoose.Types.ObjectId(userId)],
    });

    await newGroup.save();
    return res.status(201).json({ message: "Created new study group", group: newGroup });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { joinOrCreateStudyGroup };
