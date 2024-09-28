const express = require("express")
const router = express.Router()
const User = require("../models/User")

//post -> adding info (user)
//get -> getting info

router.post('/createNewUser', (req, res) => {
    const {
        UserName,
        Password,
        FirstName,
        LastName,
        Student,
        Teacher
    } = req.body
    User.searchUser(UserName)
    .then((results) => {
        if (results)
        {
            res.status(400).json({message: "Username already taken, please try a different username."})
        }
        else
        {
            res.status(200).json({message: "NO USER TAKEN"})
        }
    })
})

router.post('/loginUser', (req, res) => {
    const {
        username,
        password
    } = req.body

    User.searchUser(username)
    .then((results) => {
        if (!results)
        {
            res.status(400).json({message: "No user found. Please try a different username"})
        }
        else
        {
            console.log(results)
            res.status(200).json({message: "test"})
        }
    })
})

module.exports = router