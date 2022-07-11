const router = require("express").Router();
const places = require("../modules/places");

router.get("/new", (req, res) => {
    res.render(`places/new`);
});

router.get("/", (req, res) => {
    res.render(`places/index`, { places });
});

router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("errorpage");
    } else if (!places[id]) {
        res.render("errorpage");
    } else {
        res.render(`places/show`, { place: places[id], id });
    }
});

router.get("/:id/edit", (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("errorpage");
    } else if (!places[id]) {
        res.render("errorpage");
    } else {
        res.render(`places/edit_form`, { place: places[id], id });
    }
});
router.put("/:id", (req, res) => {
    //make sure not to put the edit page on there
    places[req.params.id] = req.body;
    console.log(req.body);
    res.redirect("/places");
});

router.post("/", (req, res) => {
    //these are all default valuse for each object
    if (!req.body.pic) {
        req.body.pic = "http://placekitten.com/400/400/";
    }
    if (!req.body.city) {
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        req.body.state = "MERICA BABY! (with southern accent)";
    }
    places.push(req.body);
    res.redirect("/places");
});

router.delete("/places/:id", (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render("errorpage");
    } else if (!places[id]) {
        res.render("errorpage");
    } else {
        places.splice(places[id], 1);
        res.redirect("/places");
    }
    console.log(req.body);
});

module.exports = router;
