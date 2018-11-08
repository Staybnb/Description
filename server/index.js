var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var path = require('path');

const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/description', function(req, res) {
  const id = Number(req.query.id);
	model.getListing(id)
		.then((results) => {
			res.send(results);
		})
		.catch((err) => console.log(err));
});


app.get('/listing', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

