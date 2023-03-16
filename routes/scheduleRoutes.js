const express = require("express");
const {
	createSchedule,
	getSchedule,
} = require("../controllers/scheduleControllers");
const router = new express.Router();

router.route("/").post(createSchedule).get(getSchedule);

module.exports = router;
