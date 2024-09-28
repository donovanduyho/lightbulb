const express = require("express")
const database = require("../database")
const router = express.Router()

//post -> adding info (user)
//get -> getting info

router.get('/', (req, res) => {
    res.status(200).json({ message: "success!"})
})

module.exports = router