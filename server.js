const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// const authenticate = require('./auth/authenticate-middleware.js') -- to be built
// const authRouter = require('./auth/auth-router.js')
// const usersRouter = require('./users/users-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// server.use('/api/auth', authRouter)
// server.use('/api/users', authenticate, usersRouter)

module.exports = server