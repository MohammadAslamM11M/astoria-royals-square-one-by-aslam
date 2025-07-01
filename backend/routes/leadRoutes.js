const express = require("express");
const router = express.Router();
const { submitLead } = require("../controllers/leadControllers");

router.post("/", submitLead);

module.exports = router;
