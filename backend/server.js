const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoutes");
const ticketRoute = require("./routes/ticketRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

//Connect to database
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/api/users", userRoute);
app.use("/api/ticket", ticketRoute);
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
