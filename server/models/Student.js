const database = require("../database")

class StudentModel {
    static async createNewStudent(Uid) {
        database.query("INSERT INTO Student (Uid) VALUES (?)", [Uid])
        .then(() => {
            console.log("success!")
        })
        .catch((err) => {
            console.log("Error inserting teacher into database: " + err)
        })
    }
}

module.exports = StudentModel