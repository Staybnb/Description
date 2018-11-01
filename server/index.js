var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/description', function(req, res) {
	var id = Number(req.query.id)
	db.selectAll(id, function(err, result){
		if(err){
			console.log(err)
		}else{
			var listing = JSON.parse(JSON.stringify(result))
			res.send(listing)
		}
	})
});


app.get('/listing', function(req, res) {
		res.sendFile(path.join(__dirname, '../react-client/dist/index.html'))
});


app.listen(process.env.PORT || 4000, function() {
  console.log(`listening on port ${process.env.PORT || 4000}`);
});

