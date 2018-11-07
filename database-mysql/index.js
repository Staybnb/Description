var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'listings'
});

var selectAll = function(id, callback) {
  var sql =  'SELECT * FROM listing_description WHERE unique_ID=(?)'
  connection.query(sql, [id], function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var interstAll = function(id, randname, randroomType, randroom_type_details, randcity, randcity_details, randlisting_details, randguest_access_details, randinteraction_guests_details, randother_details, callback) {
  var sql =  'INSERT INTO listing_description (unique_ID, user_name, room_type, room_type_details, city, city_details, listing_details, guest_access_details, interaction_guests_details, other_details) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  connection.query(sql, [id, randname, randroomType, randroom_type_details, randcity, randcity_details, randlisting_details, randguest_access_details, randinteraction_guests_details, randother_details], function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.interstAll = interstAll;
// module.exports.connection = connection;