Laravel MongoDB is the official Laravel integration for MongoDB. It extends the Eloquent model and the query builder of the Laravel API so that models and queries use the same methods against a MongoDB datastore. The [documentation](https://www.mongodb.com/docs/drivers/php/laravel-mongodb/current/) says the package was formerly named jenssegers/mongodb and is now owned and maintained by MongoDB, Inc.

## Worth knowing

The get-started guide connects the application to a cluster on MongoDB Atlas, the vendor's hosted database service, with a connection string, and says a deployment not hosted on Atlas connects through connection strings as well. The guide also asks for the MongoDB PHP extension, which the package needs to manage connections.
