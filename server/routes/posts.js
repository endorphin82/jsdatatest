import express from "express"
import { Store } from "../../stores"

export const OPTIONS = {
  HOSTDB: process.env.HOSTDB || "127.0.0.1",
  PORTDB: process.env.PORTDB || 27017,
  NAMEDB: process.env.NAMEDB || "testdb",
  URL: process.env.URL || "mongodb://127.0.0.1:27017/testdb"
}
console.log("router", OPTIONS)
const routerPosts = express.Router()
const connect = new Store(OPTIONS)
console.log("connect++", connect)
const db = connect.getDb('testdb')
db.then(res => console.log('DB++++',res))
const posts = connect.getStore('posts')
console.log("posts++", posts)
routerPosts.get("/", (req, res) => {
  posts.findAll()
    .then(result => res.send(result))
  // res.sendFile(__dirname + '/pages/home.html')
})

// routerPosts.get('/').then((req, res) => res.send().then(store.findAll()))

// routerPosts.get('/:id', (req, res) => {
//     res.send(store.find('post', req.params.id).then((post) => post))
// })
/*

routerPosts.get('/:id', async function (req, res) {
    res.send(await store.find('post', req.params.id));
})
routerPosts.post('/', async function (req, res) {
    res.send(await store.create('post', req.body));
})
routerPosts.get('/:id', async function (req, res) {
    res.send(await store.find('post', req.params.id));
})
routerPosts.put('/:id', async function (req, res) {
    res.send(await store.update('post', req.params.id, req.body));
})
routerPosts.delete('/:id', async function (req, res) {
    res.send(await store.destroy('post', req.params.id));
})

 */
export {
  routerPosts
}