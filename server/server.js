const express = require('express');
const db = require('./db.js');
const model = require('./model.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/notes', (req, res) => {
  //Write your route here!
  //res.send('Hello World');
  // req our query
  model.getAll()
    .then((response)=> {
      res.send(JSON.stringify(response));
    })
    .catch((err) => {
      console.log('Error in getting all data', err);
      res.status(500).send(JSON.stringify(err));
    })
});

app.post('/save', (req, res) => {
  console.log('body', req.body);
  model.save(req.body)
    .then((response) => {
      console.log('Saved', response);
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log('error saving');
      res.status(500).send('ERROR');
    })
})


