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

 router.get('/showAllBoards', (req, res) => {
    Board.showAllBoards()
    .then((results) => {
        res.json(results)
    })
    .catch((err) => {
        res.status(400).json({message: "Problem fetching all boards"})
        console.log(err);
        throw err;
    })
 })

 router.post('/:Bid/joinBoard', (req, res) => {
    const {Bid} = req.params
    const {Uid, Password} = req.body

    Board.comparePass(Bid, Password)
    .then((result) => {
        if (result)
        {
            Board.joinBoard(Uid, Bid)
            .then(() => {
                res.status(200).json({message: "Successfully joined board."})
            })
            .catch((err) => {
                res.status(400).json({message: "Error joining board, try again"})
            })
        }
        else
        {
            res.status(400).json({message: "Incorrect password, try a different password"})
        }
    })
    .catch((err) => {
        res.status(400).json("Something went wrong")
    })

 })


 module.exports = router
