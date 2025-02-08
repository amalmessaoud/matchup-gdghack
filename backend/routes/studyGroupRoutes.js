const express = require("express");
const router = express.Router();
const { joinOrCreateStudyGroup } = require("../controllers/studyGroupController");


router.post("/join-or-create", joinOrCreateStudyGroup);

module.exports = router;
