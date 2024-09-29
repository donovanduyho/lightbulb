const express = require("express");
const router = express.Router()
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors());
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use('/', require("../server/routes/routes"))


const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
