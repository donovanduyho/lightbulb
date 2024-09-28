const express = require("express")
const database = require("../database")
const router = express.Router()
const User = require("../models/User")

//post -> adding info (user)
//get -> getting info

router.post('/', (req, res) => {
    const {username} = req.body
    console.log(username)
    User.searchUser(username)
    .then((data) => {
        console.log(data)
        res.status(200).json({message: data})
    }).catch((err) =>{
        res.status(400).json({message: "ERROR:  " + err})
    })
})

module.exports = router