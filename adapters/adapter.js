import { MongoDBAdapter } from "js-data-mongodb"
console.log("adapter")
// Create an instance of MongoDBAdapter
export const adapter = new MongoDBAdapter({
    uri: String("mongodb://localhost:27017/testdb")
});