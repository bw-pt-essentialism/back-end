const knex = require('knes')

const knexConfig = require('../knexfile.js')

module.exports = knex(knexConfig.development)