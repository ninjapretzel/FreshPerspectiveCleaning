const router = require("express").Router();
const db = require("../models");

router.post("/booknow", (req, res) => {
    db.Booking.create(req.body)
        .then(dbBooking => res.json(dbBooking))
        .catch(err => res.status(500).json(err));
})

router.get("/getjobs", (req, res) => {
    db.Booking.find()
        .then(data => res.send(data))
})
module.exports = router;