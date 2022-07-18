const router = require("express").Router();
const db = require("../models");

router.get("/new", (req, res) => {
    res.render("places/new");
});
router.get("/", (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render("places/index", { places });
        })
        .catch((err) => {
            console.log(err);
            res.render("errorpage");
        });
}); //running the mongodb command .find() rather than haveing to use sql
//this is mongoose at work, it allows us to use these same commands that we used in
//mongoDB to create collections find documents etc... but all from our code directly

router.get("/:id", (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render("places/show", { place });
        })
        .catch((err) => {
            console.log("err", err);
            res.render("errorpage");
        });
});

router.get("/:id/edit", (req, res) => {
    res.send("GET edit form stub");
});

router.put("/:id", (req, res) => {
    res.send("PUT /places/:id stub");
});

router.post("/", (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log("error" + err);
        });
});

router.post("/:id/rant", (req, res) => {
    res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantID", (req, res) => {
    res.send("GET /place/:id/rant/:rantID stub");
});

router.delete("/places/:id", (req, res) => {
    res.send("DELETE places/:id stub");
});

module.exports = router;
