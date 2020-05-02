import { MongoClient, Server } from "mongodb"
import { BaseInterface } from "../base-interface"

class MongoAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Mongo Adapter created")
  }

  init(OPTIONS, nameStore) {
    const mongoclient = new MongoClient(OPTIONS.URL)

    return mongoclient
      .connect()
      .then(client => client.db(OPTIONS.NAMEDB))
      .then(db => db.collection(nameStore))
  }

}

const adapter = new MongoAdapter()
export { adapter }
