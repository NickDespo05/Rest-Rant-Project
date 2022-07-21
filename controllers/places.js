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
        .populate("comments")
        .then((place) => {
            res.render("places/show", { place });
            console.log(place.id);
        })
        .catch((err) => {
            console.log("err", err);
            res.render("errorpage");
        });
});

router.get("/:id/edit", (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render(`places/edit_form`, { place });
        })
        .catch((err) => {
            console.log("Edit Error", err);
            res.render("errorpage");
        });
});

router.get("/:id/comment", (req, res) => {
    let id = req.params.id;
    db.Place.findById(id)
        .then((place) => {
            res.render("places/comment", { place });
        })
        .catch((err) => {
            console.log("Error  ", err);
            res.render("errorpage");
        });
});

router.put("/:id", (req, res) => {
    db.Place.dindByIdAndUpdate(req.params.id)
        .then(() => {
            res.redirect(`/place/${req.params.id}`);
        })
        .catch((err) => {
            console.log("Put Error ", err);
            res.redirect("errorpage");
        });
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

router.post("/:id/comment", (req, res) => {
    console.log(req.body);
    req.body.rant = req.body.rant ? true : false;
    db.Place.findById(req.params.id)
        .then((place) => {
            db.Comment.create(req.body)
                .then((comment) => {
                    place.comments.push(comment.id);
                    place.save().then(() => {
                        res.redirect(`/places/${req.params.id}`);
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.redirect("errorpage");
                });
        })
        .catch((err) => {
            console.log(err);
            res.redirect("errorpage");
        });
});

router.delete("/:id", (req, res) => {
    var id = req.params.id;
    db.Place.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log("error ", err);
            res.render("errorpage");
        });
});

router.delete("/:id/comment/:rantID", (req, res) => {});

module.exports = router;
