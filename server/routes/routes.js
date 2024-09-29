const express = require("express")
const router = express.Router()


router.use("/login", require('./login'));
//router.use("/post", require('./Post'));
router.use("/board", require('./BoardRoute'));
router.use("/jwt", require('../helpers/jwt'))



module.exports = router
