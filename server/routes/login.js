const express = require("express")
const passwordCheck = require("../helpers/passwordcheck")
const router = express.Router()
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
        Student,
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
                Student,
                Teacher
            };
            
            User.addUser(newUser)
            .then(([results]) => {
                if (results.Student == 1)
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
            User.checkPasswords(UserName, Password)
            .then((result) => {
                console.log(result)
                if (result) 
                {
                    res.status(200).json({message: "Logging in user"})
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