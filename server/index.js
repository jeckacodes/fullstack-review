const express = require('express');
var bodyParser = require('body-parser');
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  console.log(req.body);
  var user = req.body.term;
  console.log('username', user);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  helpers.getReposByUsername(user, (err, response, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log('save info to database');
      db.save(JSON.parse(data));
      res.sendStatus(200);
    }
  });
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  db.get((err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      console.log('got data');
      res.send(results);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

