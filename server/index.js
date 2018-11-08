var express = require('express');
var bodyParser = require('body-parser');
var model = require('./model/model.js');
var path = require('path');

var app = express();
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
  // db.selectAll(id, function(err, result) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     var listing = JSON.parse(JSON.stringify(result));
  //     res.send(listing);
  //   }
  // });
});


app.get('/listing', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.listen(process.env.PORT || 7000, function() {
  console.log(`listening on port ${process.env.PORT || 7000}`);
});

