const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		university: {
			type: String,
		},
		imageUrl: {
			type: String,
			default: "https://i.ibb.co/fp92Ldr/icons8-person-90.png",
		},
		role: {
			type: String,
			default: "user",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
