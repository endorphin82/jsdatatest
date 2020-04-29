const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {logData} = require('./middleware')
// const JSData = require('js-data')

const app = express()
const PORT = process.env.PORT || 3005
const HOST = process.env.HOST || 'http://localhost'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/testdb'

app.use([cors(), logData])
mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
const dbConnection = mongoose.connection
dbConnection.on('error', (err) => {
    console.log(`Connection error: ${err}`)
})

dbConnection.once('open', () => {
    console.log('Connected to DB')
})

console.log('env:', process.env.ADAPTER)
app.get('/', () => {
    console.log('GET /')
})

app.listen(PORT, (err) => {
    err
        ? console.log(err)
        : console.log(
        `The server is running at ${HOST}:${PORT}/graphql`
        )
})