require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({ message: "App is healthy" });
});

app.listen(5001, () => {
    console.log("Server is listening");
});