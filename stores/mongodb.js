import { BaseStoreInterface } from "./base-store-interface"
import { Adapter, adapter } from "../adapters"
import { OPTIONS } from "../server"

export class Store extends BaseStoreInterface {
  constructor(OPTIONS, nameStore) {
    super(OPTIONS, nameStore)

    console.log("Mongo Store created", this)
  }

  findAll() {
    return this.store
      .then(collect => collect.find({}).toArray())
      .then(res => res)
  }
}

