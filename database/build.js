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
        const location = faker.address.city();
        await model.addListing({
          roomType: randomize(roomType),
          name: faker.name.findName(),
          roomTypeDetails: createListing(location),
          city: location,
          cityDetails: faker.lorem.paragraphs(),
          listingDetails: faker.lorem.paragraphs(),
          guestAccess: faker.lorem.paragraphs(),
          interaction: faker.lorem.paragraphs(),
          other: faker.lorem.paragraphs(),
          avatar: faker.image.avatar()
        });
        if (i % 1000 === 0) console.log(i);
      }
      sequelize.close();
    })();
  });
