import express from "express"
import { routerPosts } from "./routes/posts"
import { logData } from "./middleware"
import { adapter } from "../adapters"

const app = express()
app.use(logData)
app.use("/posts", routerPosts)
const OPTIONS = {
  HOSTDB: process.env.HOSTDB || "127.0.0.1",
  PORTDB: process.env.PORTDB || 27017,
  NAMEDB: process.env.NAMEDB || "testdb",
  URL: process.env.URL || 'mongodb://127.0.0.1:27017/testdb'
}

const posts = adapter.init(OPTIONS, 'posts')
console.log("posts", posts)

posts
  .then(collect => collect.find({}).toArray())
  .then(res => {
    console.log(res);
  });

/*
mongoclient.connect((err, mongoclient) => {
    const db = mongoclient.db('poststestdb')
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

app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})
