import express from "express";
import {store} from '../store'

const routerPosts = express.Router();

routerPosts.get('/', (req, res) => {
    res.send('posts homepage')
})

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