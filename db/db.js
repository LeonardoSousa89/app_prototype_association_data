const dbConfig   = require('../knexfile')['development']
const db = require('knex')(dbConfig)

module.exports = db