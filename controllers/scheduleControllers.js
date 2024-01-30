const Schedule = require("../models/scheduleModel");

exports.createSchedule = async (req, res) => {
	const saveSchedule = new Schedule(req.body);

	await saveSchedule.save();

	res.send(saveSchedule);
};

exports.getSchedule = async (req, res) => {
	const { route } = req.query;
	let filterQuery = {};
	if (route) {
		filterQuery = {
			...filterQuery,
			route: route,
		};
	}
	const schedules = await Schedule.find(filterQuery);
	res.send(schedules);
};
