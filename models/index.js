require("dotenv");
const mongoose = require("mongoose");

//prettier-ignore
mongoose.connect("mongodb://localhost:27017/rest-rant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports.Place = require("./places"); //this is defining where we will get the schema from
module.exports.Comment = require("./comment");
