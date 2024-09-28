const database = require("../database")
const passwordCheck = require("../helpers/passwordcheck")

class User {
    static async searchUser(username) {
        console.log(username)
        return database.query("SELECT * FROM User WHERE UserName = ?", [username])
        .then((rows) => rows[0])
        .catch((err) => {
            console.log(err);
            throw err;
        });
    }
}

module.exports = User


