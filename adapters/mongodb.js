import {BaseInterface} from "./base-interface";
import {MongoClient, Server} from "mongodb";

class MongoAdapter extends BaseInterface {
    constructor() {
        super()
        console.log("Mongo Adapter created")
    }

    connect(OPTIONS) {
        const mongoClient = new MongoClient(new Server(OPTIONS.HOSTDB, OPTIONS.PORTDB), {native_parser: true})
        return mongoClient.connect()
    }

    getDb(dbName) {
        return super.getDb(dbName);
    }
}

const adapter = new MongoAdapter()
export {
    adapter
}