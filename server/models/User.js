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

    static async checkPasswords(username, password) {
        const enteredPassword = await passwordCheck.hashPassword(password);
        const hashedPassword = await User.searchUser(username).password;

        console.log(hashedPassword)
        console.log(enteredPassword)

        const returnedValue = await passwordCheck.comparePassword(enteredPassword, hashedPassword);
        return returnedValue
    }
}

module.exports = User


