const mysql = require('mysql2');
const Promise = require('bluebird');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'takenote'
});

const db = Promise.promisifyAll(connect);

var getAll = () => {
  return db.queryAsync('SELECT * FROM notes;');
}

module.exports = db;