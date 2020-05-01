import { MongoClient, Server } from "mongodb"
import { BaseInterface } from "../base-interface"

class MongoAdapter extends BaseInterface {
  constructor() {
    super()
    console.log("Mongo Adapter created")
  }

  init(OPTIONS, nameStore) {
    const mongoclient = new MongoClient(new Server(OPTIONS.HOSTDB, OPTIONS.PORTDB), { native_parser: true })
    return mongoclient.connect(function(err, mongoclient) {
      mongoclient.db(OPTIONS.NAMEDB)
      const db = mongoclient.db(OPTIONS.NAMEDB)
      console.log("(OPTIONS, nameStore)", OPTIONS, nameStore)
      return db.collection(nameStore)
      // return this.getStore(db, nameStore)
      // const postsProm = posts.find({}).toArray()
      // postsProm.then((res) => {
      //   console.log(res)
      // })
    })
  }
}

const adapter = new MongoAdapter()
export { adapter }
