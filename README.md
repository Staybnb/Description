# Description
This component displays the desription for each listing in the Staybnb application.


## Related Projectts

  - https://github.com/Staybnb/Proxy_Dev
  - https://github.com/Staybnb/Neighborhood
  - https://github.com/Staybnb/Booking
  - https://github.com/Staybnb/Reviews
  
### Launching the application locally
Before the microservice can be run, a MySQL database needs to be set up to store the description table. Follow the steps below to initialize a schema and populate the table.

```sh
# download dependencies
npm install

# set up MySQL schema
go to your root directory
mysql -u root < database-mysql/schema.sql

# populate database
npm run seed

# start server on localhost
npm run server-dev

# run webpack to build client bundle
npm run react-dev
```
