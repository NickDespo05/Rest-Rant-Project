require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1>");
});

app.listen(process.env.PORT);
