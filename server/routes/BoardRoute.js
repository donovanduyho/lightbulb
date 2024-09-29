const express = require("express")
const router = express.Router()
const Board = require("../models/Board")



router.post('/createNewBoard', (req,res) => {
    const {
        Tid,
        boardName,
        Password
    } = req.body 
    Board.findBoardByName(boardName)
    .then(([results]) => {
        console.log(results)
        if (results)
        {   
            res.status(400).json({message: "Board name already taken, please try a different board name."})
        }
        else{
           const newBoard = {
                Tid,
                boardName,
                Password
            }

            console.log(Tid, " + ", boardName, " + ", Password)

            Board.addBoard(newBoard)
            .then((results) => {
                console.log(results);
                res.status(200).json({message: "BOARD NAME CREATED"})
            })
            .catch((err) => {
                res.status(400).json({message: "uh oh "})
            })

     
        }
        })

})


 router.post('/SearchForBoard', (req, res) => {
    const{
        boardName
    } = req.body
    Board.findBoardByName(boardName)
    .then(([results]) => {
        if(results)
        {
            res.status(400).json({message: "Board name found"})
            //display that board?
        }
        else{
            res.status(200).json({message: "No board name was found"})
        }
    })
 })


router.post('/DeleteBoard', (req, res) => {
    const{
        boardName
    } = req.body
    Board.findBoardByName(boardName)
    .then(([results]) => {
        console.log(results)
        if(results)
        {   
            Board.deleteBoardByName(boardName)
            res.status(400).json({message: "Board name was deleted"})
        }
        else{
            res.status(200).json({message: "Board was not found"})

        }
    })
 })

 

 module.exports = router
