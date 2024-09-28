const express = require("express");
const router = express.Router()


const app = express()

app.use('/test', require("./routes/login"))

const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`))