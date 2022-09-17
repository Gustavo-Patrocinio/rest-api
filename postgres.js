const pgsql = require("pgsql");

var pool = pgsql.createPool({
  user: process.env.pgqsl_USER,
  password: process.env.pgsql_PASSWORD,
  database: process.env.psql_DATABASE,
  host: process.env.psql_HOST,
  port: process.env.psql_PORT,
});

exports.pool = pool;
