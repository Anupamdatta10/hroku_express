const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
require('dotenv').config()
const client = new Client({
    connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
  })

  module.exports={client}