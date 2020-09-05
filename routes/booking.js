const router = require("express").Router();
const db = require("../models");

router.post("/api/booknow", (req, res) => {
    console.log(req.body)
    db.Booking.create(req.body)
        .then(dbBooking => res.json(dbBooking))
        .catch(err => res.status(422).json(err));
})

module.exports = router;