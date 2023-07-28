require("./models/user");
require("./models/track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes.js");
const trackRoutes = require("./routes/trackRoutes.js");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = "mongodb+srv://kennethdcross:389zlNAe0KkRl38o@cluster0.iiwqvhz.mongodb.net/"
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err)=>{
    console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req,res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});