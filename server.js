const express = require('express');

const router = express.Router();

const app = express();
const connectDB = require('./config/db.config');

connectDB();
app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/user"));


app.listen(9000, () => {
    console.log('Server Started');
});