const Schedule = require("../models/scheduleModel");

exports.createSchedule = async (req, res) => {
	const saveSchedule = new Schedule(req.body);

	await saveSchedule.save();

	res.send(saveSchedule);
};

exports.getSchedule = async (req, res) => {
	const schedules = await Schedule.find();
	res.send(schedules);
};
