const express = require('express')

const User = require('./users-helper.js')

const router = express.Router()

router.get('/', (req, res) => {
    User.getUsers()
        .then(users => {
            res.status(200).json(
                users.map(cv => {
                    return cv
                })
            )
        })
})