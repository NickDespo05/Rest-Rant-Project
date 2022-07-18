const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: "http://placekitten.com/500/500" },
    cuisines: { type: String, required: true },
    city: { type: String, default: "Anytown" },
    state: { type: String, default: "USA" },
    founded: {
        type: Number,
        min: [1673, "Sureley not that old!"],
        max: [new Date().getFullYear(), "Hey this is in the future"],
    },
});

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state}, since ${this.founded}`;
};

module.exports = mongoose.model("Place", placeSchema);

//the schema is a template for what feilds an object COULD have in mongodb
