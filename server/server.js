const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use('/', require('../server/routes/routes'));

const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
