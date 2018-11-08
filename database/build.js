const faker = require('faker');
const model = require('../server/model/model.js');
const sequelize = require('../database/index.js');

const randomize = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const roomType = ['ENTIRE APARTMENT', 'ENTIRE LOFT', 'PRIVATE ROOM IN TOWNHOUSE', 'PRIVATE ROOM IN APARTMENT', 'PRIVATE ROOM', 'PRIVATE ROOM IN GUEST SUITE'];

const adj = ['Small', 'Large', 'Cozy', 'Amazing', 'Little', 'Beautiful', 'Charming', 'Lovely', ''];
const noun = ['Apartment', 'Loft', 'House', 'Condo', 'Studio'];
const area = ['in Downtown', 'Just Outside', 'Outside', 'in', 'Steps Away from Downtown', 'Minutes Away from'];

const createListing = (location) => {
  return `${randomize(adj)} ${randomize(noun)} ${randomize(area)} ${location}`;
};

model.listingSchema.sync({force: true})
  .then(() => {
    (async () => {
      for (let i = 0; i < 10000; i++) {
        let arr = [];
        for (let x = 0; x < 1000; x++) {
          const location = faker.address.city();
          arr.push({
            room_type: randomize(roomType),
            user_name: faker.name.findName(),
            room_type_details: createListing(location),
            city: location,
            city_details: faker.lorem.paragraphs(),
            listing_details: faker.lorem.paragraphs(),
            guest_access_details: faker.lorem.paragraphs(),
            interaction_guests_details: faker.lorem.paragraphs(),
            other_details: faker.lorem.paragraphs(),
            avatar: faker.image.avatar()
          })
        }
        await model.addBulkListing(arr);
        console.log(i);
      }
      sequelize.close();
    })();
  });
