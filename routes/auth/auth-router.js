const db = require('../users/users-helper')
const bcjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

router.post('/register', (req, res) => {
    const creds = req.body;

    const hash = bcjs.hashSync(creds.password, 10)
    creds.password = hash

    db.addUser(creds)
        .then(id => {
            res.status(201).json({message: "New user created", id: id[0].id})
        })
        .catch(err => {
            res.status(500).json({message: 'Error adding new user to the database', err})
        })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    db.getUserBy({username})
        .then(user => {
            if(user && bcjs.compareSync(password, user.password)) {
                let token = generateToken(user)
                res.status(200).json({message: `Welcome ${username}!`, token: token, id: user.id})
            } else {
                res.status(401).json({ message: 'Invalid credentials'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Error posting credentials to the database"})
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '2d'
    }

    return jwt.sign(payload, 'banananutmuffin?!1/', options)
}

module.exports = router