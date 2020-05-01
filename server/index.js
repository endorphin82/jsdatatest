import express from "express"
import { routerPosts } from "./routes/posts"
import { logData } from "./middleware"
// import {adapter} from './adapter'
import { adapter } from "../adapters"
import { MongoClient, Server } from "mongodb"

const app = express()
app.use(logData)
app.use("/posts", routerPosts)
const OPTIONS = {
  HOSTDB: process.env.HOSTDB || "localhost",
  PORTDB: process.env.PORTDB || 27017,
  NAMEDB: process.env.NAMEDB || "testdb"
}
// app.route('/posts')
//     .get(function(req, res) {
//         res.send('Get a random book');
//     })
// adapter
//     .client

// const mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true})
const posts = adapter.init(OPTIONS, 'posts')
// const postsProm = posts.find({}).toArray()
// postsProm.then((res) => {
//   console.log(res)
// })
// adapter.getStore('posts', OPTIONS)
console.log('db', posts)
// const posts = db
// .then((db) => {
//   return db.collection('posts')
//   .find({})
//   .toArray()
//   .then(
//       (res) => {
//       console.log(res)
//   })
// })
/*
const posts = db
  .then((res) => {
    return db.collection("posts").find({}).toArray().then((res) => {
        console.log(res)
    })
  })
  .catch((err) => {
    console.log("EEEE", err)
  })
*/
// const posts = db.collection('posts')
// console.log("db", posts)
// const postProm = posts.find({}).toArray()
// console.log(postsProm)
// postsProm.then(res => {
//   console.log(res)
// })

// console.log("posts", posts)
// const db = mongoclient.then((mongoclient) => {
//   return mongoclient.db("testdb")
// })
// const client = adapter.init(OPTIONS)
// const posts  = client.collection('posts')
// const posts = client
//   .then((client) => {
//     client.db("testdb").collection("posts")
//   })
/*
    mongoclient.connect(function (err, mongoclient) {
    const db = mongoclient.db('testdb')
    const posts = db.collection('posts')
    const postsProm = posts.find({}).toArray()
    postsProm.then((res) => {
        console.log(res)
    })
})
*/
console.log(process.env.USER)
/*
mongoclient.connect((err, mongoclient) => {
    const db = mongoclient.db('testdb')
    if (err) {
        console.log("DDDDDDDBBB", db, err)
        throw err;
    }
    const posts = db.collection('posts')
    posts.insertMany([
        {title: 'title2', text: 'text2'},
        {title: 'title3', text: 'text3'},
        {title: 'title4', text: 'text4'},
    ]).then((err, result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })
})
*/
//     .then((db) => {
//         const collection = db.collection('posts').find({}).toArray(function (err, result) {
//             if (err) {
//                 console.log("col DDDDDDDBBB", err)
//                 // throw err;
//             }
//             console.log(result);
//         })
//         console.log("DDDDDDDBBB", db)
//         collection.insertMany([
//             {title: 'title2', text: 'text2'},
//             {title: 'title3', text: 'text3'},
//             {title: 'title4', text: 'text4'},
//         ], (err, result) => {
//             console.log(results);
//         })
//     }).catch(err => {
//     console.log("ERROOOOOOOR", err)
//     // catch err
// })
app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})
