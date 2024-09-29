const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const StudentModel = require("../models/Student")
const TeacherModel = require("../models/Teacher")

//post -> adding info (user)
//get -> getting info

router.post('/createNewUser', (req, res) => {
    const {
        UserName,
        Password,
        FirstName,
        LastName,
        Teacher
    } = req.body
    User.searchUser(UserName)
    .then(([results]) => {
        if (results)
        {
            res.status(400).json({message: "Username already taken, please try a different username."})
        }
        else
        {
            const newUser = {
                UserName,
                Password,
                FirstName,
                LastName,
                Teacher
            };
            
            User.addUser(newUser)
            .then(([results]) => {
                if (results.Teacher == 0)
                {
                    StudentModel.createNewStudent(results.Uid)
                    .then(() => {
                        res.status(200).json({message: "Student Successfully Created"})
                    })
                    .catch((err) => {
                        res.status(400).json({message: "Error making student!: " + err})
                    })
                }
                else 
                {
                    TeacherModel.createNewTeacher(results.Uid)
                    .then(() => {
                        res.status(200).json({message: "Teacher successfully created"})
                    })
                    .catch((err) => {
                        res.status(400).json({message: "Error making teacher model: " + err})
                    })
                }
            })
            .catch((err) => {
                res.status(200).json({message: "Problem!!!! " + err})
            })
        }
    })
})

router.post('/loginUser', (req, res) => {
    const {
        UserName,
        Password
    } = req.body

    User.searchUser(UserName)
    .then(([results]) => {
        if (!results)
        {
            res.status(400).json({message: "No user found. Please try a different username"})
        }
        else
        {
            const payload = results
            User.checkPasswords(UserName, Password)
            .then((result) => {
                if (result) 
                {
                    const token = jwt.sign({payload}, process.env.TOKEN_SECRET)
                    res.status(200).json({ token: token })
                }
                else 
                {
                    res.status(400).json({message: "Passwords do not match, please try a different password"})
                }
            })
        }
    })
})

module.exports = router