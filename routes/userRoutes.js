const express = require("express");
const { createUser } = require("../controllers/userControllers");
const router = new express.Router();

router.route("/").post(createUser);
module.exports = router;
