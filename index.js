//basic stuff so far, just created a 404 error page and a basic home page using what we know already

require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// app.set("views", __dirname + "./views");
//middleware or settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use("/places", require("./controllers/places"));
app.use(express.static("public"));

//what we did above was link the 2 files of places.js and index.js together and gave it a path to do so
//which ^^^ right above you can see is /places

//it just says that when we go to /places path that places.js is going to be used
//this is made possible by setting up the router in places.js

app.get("/", (req, res) => {
    res.render(`./home`);
});

app.get("/*", (req, res) => {
    res.render(`./errorpage`);
});

app.listen(process.env.PORT);
