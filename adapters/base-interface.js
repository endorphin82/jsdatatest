class BaseInterface {
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
    connect(OPTIONS) {
        return new Error("Please implement connect method!")
    }
    getDb(dbName){
        return new Error("Please implement getDb method!")
    }
    getCollection(nameCollection){
        return new Error("Please implement getCollection method!")
    }
}
export{
    BaseInterface
}