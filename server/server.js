const express = require("express")
const Router = express.Router()


const app = express()

const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`))