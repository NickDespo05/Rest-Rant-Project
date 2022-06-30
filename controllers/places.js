const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("GET /places"); // GETS the route from the index page
});

module.exports = router;
