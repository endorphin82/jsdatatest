import { MongoDBAdapter } from 'js-data-mongodb';

// Create an instance of MongoDBAdapter
export const adapter = new MongoDBAdapter({
    uri: 'mongodb://localhost:27017'
});