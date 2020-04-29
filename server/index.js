import express from 'express';
import {router} from "./routes/posts";
import {logData} from "./middleware";
const app = express();

app.use([logData])

app.route('/posts', router)

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});