const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");

const app = express();

app.use(authRoutes);

const mongoUri = "mongodb+srv://kennethdcross:389zlNAe0KkRl38o@cluster0.iiwqvhz.mongodb.net/"
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err)=>{
    console.error("Error connecting to mongo", err);
});

app.get("/", (req,res) => {
    res.send("Hi there!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});