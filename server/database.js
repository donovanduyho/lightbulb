const mysql = require("mysql2");

const database = mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB
}).then(() => {
    console.log("successfully connected to database")
}).catch((err) => {
    console.log("error connecting to database : " + err)
})

module.exports = database.promise();