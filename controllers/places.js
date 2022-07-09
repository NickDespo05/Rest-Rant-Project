const router = require("express").Router();
const places = require("../modules/places");

router.get("/new", (req, res) => {
    res.render(`places/new`);
});

router.get("/", (req, res) => {
    res.render(`places/index`, { places });
});

router.post("/", (req, res) => {
    //these are all default valuse for each object
    if (!req.body.pic) {
        req.body.pic = "http://placekitten.come/400/400/";
    }
    if (!req.body.city) {
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        req.body.state = "MERICA BABY! (with southern accent)";
    }
    places.push(req.body);
    console.log(req.body);
    res.redirect("/places");
});

module.exports = router;
