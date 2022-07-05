const db = require('./db.js');

module.exports.getAll = () => {
  return db.queryAsync('SELECT * FROM notes;');
}

module.exports.save = (data) => {
  console.log('new note', data);
  let importingData = Object.values(data);
  return db.queryAsync('INSERT INTO notes (title, category, tagline, note) VALUES (?, ?, ? ,?)', importingData);
}