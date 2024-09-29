const database = require('../database');

class Post {

     async addPost(Post){
        const {Pid, Uid, created_at, updated_at, checked, UPVOTES} = Post
        return database.query("INSERT INTO Post (Pid, Uid, created_at, updated_at, checked, UPVOTES, content) VALUES (?,?,?,?,?,?,?)",
        [Pid,Uid,created_at,updated_at,checked,UPVOTES,content])
        .then((data) => data.Pid)
        .catch(err => console.log(err));
        }

     async deletePost(pid) {
        database.query("DELETE FROM Post WHERE pid = ?", [Pid])
        .catch((err) => console.log(err));
    }
/* ????? idk 
    async makePost(pid, content){
        database.query("INSERT INTO Post (content) VALUES (?)"[content])
        .catch((err) => console.log(err));
    }    return database.query("SELECT * FROM Events WHERE eid = ?", [eid])

    */
}

module.exports ={
    addPost,
    deletePost,
}