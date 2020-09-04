const router = require("express").Router()

router.use("/api", require("./apiRoutes"))
router.use("/login", require("./login"))

module.exports = router