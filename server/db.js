const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "firli0802",
  host: "localhost",
  port: 5432,
  database: "readingbookstore1"
});

module.exports = pool;