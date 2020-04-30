import { MongoDBAdapter } from 'js-data-mongodb';

// Create an instance of MongoDBAdapter
const adapter = new MongoDBAdapter({
    debug: true,
    uri: 'mongodb://localhost:27017/testdb'
})
export {
    adapter
}
