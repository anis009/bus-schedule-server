const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require("./config/db");
const userRouter = require("./routes/userRoutes");
const scheduleRouter = require("./routes/scheduleRoutes");
require("colors");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 6060;

// connection to database
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user/", userRouter);
app.use("/api/schedule/", scheduleRouter);
app.get("/", async (req, res) => {
	res.send("server is running ");
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`.cyan.underline);
});
