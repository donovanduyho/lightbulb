const database = require("../database")
const passwordCheck = require("../helpers/passwordcheck")

class User {
    static async searchUser(username) {
        return database.query("SELECT * FROM User WHERE UserName = ?", [username])
        .then((rows) => rows[0])
        .catch((err) => {
            console.log(err);
            throw err;
        });
    }

    static async getPassword(username) {
        return database.query("SELECT Password FROM User WHERE username = ?", [username])
        .then(([rows]) => rows[0].Password)
        .catch((err) => {
            console.log(err);
            throw err;
        });
    }

    static async checkPasswords(username, password) {
        const hashedPassword = await User.getPassword(username)

        const returnedValue = await passwordCheck.comparePassword(password, hashedPassword);
        return returnedValue
    }

    static async addUser(user) {
        const {
            UserName,
            Password,
            FirstName,
            LastName,
            Teacher
        } = user;

        const hashedPassword = await passwordCheck.hashPassword(Password)        

        return database.query("INSERT INTO User (LastName, FirstName, UserName, Password, Teacher) VALUES (?,?,?,?, ?)",
        [LastName, FirstName, UserName, hashedPassword, Teacher])
        .then(() => User.searchUser(UserName))
        .then((info) => info)
        .catch((err) => {
            console.log(err);
            throw err;
        })        
    }
}

module.exports = User


