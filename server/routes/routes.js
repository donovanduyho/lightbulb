const express = require("express")
const router = express.Router()


router.use("/login", require('./login'));
//router.use("/post", require('./Post'));
router.use("/board", require('./BoardRoute'));



module.exports = router
