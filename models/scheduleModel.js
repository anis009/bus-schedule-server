const mongoose = require("mongoose");
const scheduleSchema = mongoose.Schema(
	{
		time: {
			type: String,
		},
		route: {
			type: String,
		},
		bus: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
