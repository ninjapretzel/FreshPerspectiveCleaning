const router = require("express").Router()

router.use("/api/booknow", require("./booking"))

module.exports = router