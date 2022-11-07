const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
const client = new Client({
    connectionString: 'postgres://wthsciqzyewldk:3aba64ad29d71f1aada156ad8cf459d0192d49464d712dc1f60d310de28ded75@ec2-44-209-57-4.compute-1.amazonaws.com:5432/d9rhfdd3g8gjte',
  ssl: {
    rejectUnauthorized: false
  }
    // user: 'wthsciqzyewldk',
    // host: 'ec2-44-209-57-4.compute-1.amazonaws.com',
    // database: 'd9rhfdd3g8gjte',
    // password: '3aba64ad29d71f1aada156ad8cf459d0192d49464d712dc1f60d310de28ded75',
    // port: 5432,
  })

  module.exports={client}