import express from "express"
import { routerPosts } from "./routes/posts"
import { logData } from "./middleware"
import { Store } from "../stores"

const app = express()
app.use(logData)
app.use("/posts", routerPosts)
/*
export const OPTIONS = {
  HOSTDB: process.env.HOSTDB || "127.0.0.1",
  PORTDB: process.env.PORTDB || 27017,
  NAMEDB: process.env.NAMEDB || "testdb",
  URL: process.env.URL || 'mongodb://127.0.0.1:27017/testdb'
}

const store = new Store(OPTIONS, 'posts')
const result = store.findAll()
result.then(res => console.log(res))
*/
app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})
