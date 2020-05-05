import express from "express"
import { routerPosts } from "./routes/posts"
import { logData } from "./middleware"

const app = express()
app.use(logData)
app.use("/posts", routerPosts)

app.listen(3000, function() {
  console.log("Example app listening on port 3000!")
})
