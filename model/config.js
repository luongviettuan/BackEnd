var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tuan311297",
  database: "doan"
});
conn.connect(function(err) {
    if (err)    throw err;
});
module.exports = conn;