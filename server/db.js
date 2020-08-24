const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'tannerpriest',
    password: process.env.POST_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'universalstudios'
})

module.exports = pool;