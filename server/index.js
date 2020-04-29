import express from "express";
// import {store} from './store';
// import {adapter} from '../adapters/adapter'
import {MongoDBAdapter} from "js-data-mongodb"

const app = express();
console.log("app")
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});