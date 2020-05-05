import { Adapter } from "../adapters"

class BaseStoreInterface {
  constructor(OPTIONS){
    this.connection = new Adapter(OPTIONS)
      .connect()
    console.log("Mongo Store created", this)
  }
  getDb(dbName){
    return new Error("Please implement getDb method!")
  }
  find(firsName) {
    // валидация
    return new Error("Please implement findByName method!")
  }
  findAll(){
    return new Error("Please implement findAll method!")
  }
  update () {
    // валидация
    return new Error("Please implement update method!")
  }
  createMany(arrayUsers) {
    // валидация
    return new Error("Please implement createMany method!")
  }
  // updateMany
  destroy(id){
    return new Error("Please implement destroy method!")
  }
  destroyMany(arrayIds){
    return new Error("Please implement destroyMany method!")
  }
  getDb(dbName){
    return new Error("Please implement getDb method!")
  }
  getStore(nameStore){
    return new Error("Please implement getStore method!")
  }
}
export{
  BaseStoreInterface
}