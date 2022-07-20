const db = require("../models");

async function seed() {
    //this is getting the place
    let place = await db.Place.findOne({ name: "H-Thai-ML" });

    //this is creating a sample comment
    let comment = await db.Comment.create({
        author: "Famished Fran",
        rant: false,
        stars: 5.0,
        content: "Wow Simply Fantastic! Definately recommended",
    });

    let comment2 = await db.Comment.create({
        author: "Nick",
        rant: true,
        stars: 1.0,
        content:
            "Honestly dont like Thai food to begin with, but this place sucks!",
    });

    place.comments.push(comment.id);
    place.comments.push(comment2.id);

    await place.save();

    process.exit();
}

seed();
