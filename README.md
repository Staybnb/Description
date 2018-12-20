# Description
This component displays the desription for each listing in the Staybnb application.


## Related Projectts

  - https://github.com/Staybnb/Proxy_Dev
  - https://github.com/Staybnb/Neighborhood
  - https://github.com/Staybnb/Booking
  - https://github.com/Staybnb/Reviews
  
### Launching the application locally
Before the microservice can be run, a MySQL database needs to be set up to store the description table. Set up the local database with username 'root' and follow the steps below to populate it

```sh
# download dependencies
npm install

# populate database
npm run seed

# start server on localhost
npm run server-dev

# run webpack to build client bundle
npm run react-dev
```
