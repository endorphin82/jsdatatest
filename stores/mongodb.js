import { BaseStoreInterface } from "./base-store-interface"

export class Store extends BaseStoreInterface {
  constructor(OPTIONS) {
    super(OPTIONS)

    console.log("Mongo Store created", this)
  }

  db
  store

  getDb(dbName) {
    this.db = this.connection
      .then(client => client.db(dbName)).then(database => database)
    return this.db
  }

  getStore(nameStore) {
    this.store = this.db
      .then(db => db.collection(nameStore)).then(collection => {
      console.log ("_setStore", collection)
      })
    // console.log("_setStore", this.store)
    return this.store
  }

  findAll() {
    return this.store
      .then(collect => collect.find({}).toArray())
      .then(res => res)
  }
}

