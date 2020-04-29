import express from 'express';
export const router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});
// app.post('/', async function (req, res) {
//     res.send(await store.create('post', req.body));
// })
// app.get('/:id', async function (req, res) {
//     res.send(await store.find('post', req.params.id));
// })
// .put('/:id', async function (req, res) {
//     res.send(await store.update('post', req.params.id, req.body));
// })
// .delete('/:id', async function (req, res) {
//     res.send(await store.destroy('post', req.params.id));
// });
