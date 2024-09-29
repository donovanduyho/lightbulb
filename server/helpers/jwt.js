const express = require('express')
const jwt = require("jsonwebtoken")
const router = express.Router()


router.post('./refresh', (req, res) => {
    const {refreshToken} = req.body
    if (!refreshToken)
        return res.status(401).json({message: "Refresh token not found"})

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
})