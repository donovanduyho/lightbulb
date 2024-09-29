const database = require('../database');

class Replies{
    async addReply(Replies){
        const{Reid, Pid, Uid, created_at, updated_at, content} = Replies
        return database.query("INSERT INTO Replies (Reid, Pid, Uid, created_at, updated_at, content) VALUES(?,?,?,?,?,?", [Reid, Pid, Uid, created_at, updated_at,content])
        .then((Replies) => Replies.Reid)
        .catch(err => console.log(err));
    }

    async deleteReply(Replies){
        database.query("DELETE FROM Replies WHERE Reid = ?",[Reid])
        .catch((err) => console.log(err));
    }

}

module.exports={
    addReply, 
    deleteReply
}
