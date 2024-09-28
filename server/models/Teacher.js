const database = require("../database")


class Teacher {
    searchTeacher(Uid) {
        database.query("SELECT * FROM Teachers WHERE Uid = ?", [Uid])
        .then((rows) => {
            rows[0]
        }).catch((err) => {
            console.log(err);
            throw err;
        })
    }


    createNewTeacher(Uid) {
        database.query("INSERT INTO Teachers (Uid) VALUES (?)", [Uid])
        .then()
    }
}

module.exports = Teacher