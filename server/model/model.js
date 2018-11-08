const db = require('../../database/index.js');
const Sequelize = require('sequelize');

const Listing = db.define('listing', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  room_type: {
    type: Sequelize.TEXT
  },
  user_name: {
    type: Sequelize.TEXT
  },
  room_type_details: {
    type: Sequelize.TEXT
  },
  city: {
    type: Sequelize.TEXT
  },
  city_details: {
    type: Sequelize.TEXT
  },
  listing_details: {
    type: Sequelize.TEXT
  },
  guest_access_details: {
    type: Sequelize.TEXT
  },
  interaction_guests_details: {
    type: Sequelize.TEXT
  },
  other_details: {
    type: Sequelize.TEXT
  },
  avatar: {
    type: Sequelize.TEXT
  }
});

const getListing = (id) => {
  return Listing.findById(id)
    .catch((err) => console.log(err));
};

const addListing = (data) => {
  return Listing.create({
    room_type: data.roomType,
    user_name: data.name,
    room_type_details: data.roomTypeDetails,
    city: data.city,
    city_details: data.cityDetails,
    listing_details: data.listingDetails,
    guest_access_details: data.guestAccess,
    interaction_guests_details: data.interaction,
    other_details: data.other,
    avatar: data.avatar
  })
    .catch((err) => console.log(err));
};

const addBulkListing = (data) => {
  return Listing.bulkCreate(data)
    .catch((err) => console.log(err));
};

const deleteListing = (id) => {
  return Listing.destroy({
    where: {id: id}
  })
    .catch((err) => console.log(err));
};

const updateListing = (data) => {
  let {id, ...changes} = data;
  return Listing.findById(id)
    .then((listing) => {
      listing.updateAttributes(changes);
    })
    .catch((err) => console.log(err));
};

module.exports.getListing = getListing;
module.exports.addListing = addListing;
module.exports.addBulkListing = addBulkListing;
module.exports.deleteListing = deleteListing;
module.exports.updateListing = updateListing;
module.exports.listingSchema = Listing;