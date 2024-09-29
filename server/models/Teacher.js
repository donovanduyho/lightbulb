const database = require("../database")

class TeacherModel {
    static async searchTeacher(Uid) {
        database.query("SELECT * FROM Teachers WHERE Uid = ?", [Uid])
        .then((rows) => {
            rows[0]
        }).catch((err) => {
            console.log(err);
            throw err;
        })
    }


    static async createNewTeacher(Uid) {
        database.query("INSERT INTO Teacher (Uid) VALUES (?)", [Uid])
        .then(() => {
            console.log("success!")
        })
        .catch((err) => {
            console.log("Error inserting teacher into database: " + err)
        })
    }
}

module.exports = TeacherModel