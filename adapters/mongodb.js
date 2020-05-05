import { MongoClient } from "mongodb"
import { BaseAdapterInterface } from "./base-adapter-interface"

export class Adapter extends BaseAdapterInterface {
  constructor(OPTIONS) {
    super()
    this.OPTIONS = OPTIONS
    console.log("Mongo Adapter created", this)
  }

  connect(OPTIONS) {
    const mongoclient = new MongoClient(this.OPTIONS.URL)
    return mongoclient
      .connect()
  }
}
