const User = require("../models/userModel");

exports.createUser = async (req, res) => {
	const user = req.body;
	const saveUser = new User(user);
	await saveUser.save();
	res.send(saveUser);
};
