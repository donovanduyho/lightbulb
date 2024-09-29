const database = require('../database');
const passwordCheck = require('../helpers/passwordcheck');

class Board{

    static async addBoard(Board){
        const {Tid, boardName, Password} = Board
        console.log(Tid, " + ", boardName, " + ", Password)
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

  /*  static async deleteBoardByBid(Bid){
        database.query("DELETE FROM Board WHERE Bid =?", [Bid])
        .catch((err) => console.log(err));
    }*/

    static async deleteBoardByName(boardName){
        return database.query("DELETE FROM Board WHERE boardName =?", [boardName])
        .catch((err) => console.log(err));
    }

    

/* Password inputted by user through route*/ 
/* */

}



    module.exports = Board