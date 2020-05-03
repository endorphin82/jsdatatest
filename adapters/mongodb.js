import { MongoClient } from 'mongodb'
import { BaseAdapterInterface } from './base-adapter-interface'

export class Adapter extends BaseAdapterInterface {
  constructor(OPTIONS, nameStore) {
    super()
    this.OPTIONS = OPTIONS
    this.nameStore = nameStore
    console.log('Mongo Adapter created', this)
  }

  init() {
    const mongoclient = new MongoClient(this.OPTIONS.URL)

    return mongoclient
      .connect()
      .then(client => client.db(this.OPTIONS.NAMEDB))
      .then(db => db.collection(this.nameStore))
  }
}
