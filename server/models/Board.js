const database = require('../database');
const passwordCheck = require('../helpers/passwordcheck');

class Board{

    static async addBoard(Board){
        const {Tid, boardName, Password} = Board
        const hashedPassword = await passwordCheck.hashPassword(Password)
        return database.query("INSERT INTO Board (Tid, boardName, Password) VALUES (?,?,?)",
            [Tid, boardName, hashedPassword])
        .then((data) => data.Tid)
        .catch(err => console.log(err));
    }

    static async findBoardByBid(Bid){
        return database.query("SELECT * FROM Board WHERE Bid =?", [Bid])
        .catch((err) => console.log(err));
    }

    static async findBoardByName(boardName){
         return database.query("SELECT * FROM Board WHERE boardName = ?", [boardName])
         .then((results) => results[0])
         .catch((err) => console.log(err));
    }

    static async deleteBoardByName(boardName){
        return database.query("DELETE FROM Board WHERE boardName =?", [boardName])
        .catch((err) => console.log(err));
    }

    static async showAllBoards() {
        return database.query("SELECT * FROM Board")
        .then(([results]) => results.map(row => ({ ...row})))
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }

    static async getBoardPass(Bid) {
        return database.query("SELECT Password FROM Board WHERE Bid = ?", [Bid])
        .then(([results]) => results[0].Password)
        .catch((err) => {
            console.log(err);
            throw err;
        })
    }

    static async comparePass(Bid, password) {
        const hashedPassword = await Board.getBoardPass(Bid)
        console.log(hashedPassword)
        return await passwordCheck.comparePassword(password, hashedPassword);
    }

    static async joinBoard(Bid, Uid)
    {
        //joining board code here
        return database.query("INSERT INTO Enrollment (Uid, Bid) VALUES (?, ?)", [Bid, Uid])
        .then((results) => results)
        .catch((err) => {
            console.log(err);
            throw err; 
        })
    }
}



    module.exports = Board