
'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const app = express()

// configuration des BD
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'tp_music',
    user: 'postgres',
    password: 'postgres'
})
client.connect((error) => {
    if (error) {
        console.error('connection error ', error.stack)
    } else {
        console.log('connected')
    }
})
const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('dist'))
// parse application/json
app.use(bodyParser.json())
// CORS for development
// https://enable-cors.org/server_expressjs.html
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Credentials', 'false')
    next()
})
function sendResponse (response, datas) {
    // fermer la connection
    response.writeHead(HTTP_OK, { 'content-type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(datas))
}
app.get('/playlist', (request, response) => {
    client.query('SELECT * FROM playlist', [])
        .then(result => {
            sendResponse(response, result.rows)
        })
})
app.get('/playlist/:id', (request, response) => {
    console.log(parseInt(request.params.id))
    client.query('SELECT * FROM track where playlist_id=$1', [parseInt(request.params.id)])
        .then(result => {
            sendResponse(response, result.rows)
        })
})
app.post('/track', (request, response) => {
    const query = 'INSERT INTO track (playlist_id , title, uri,master_id) VALUES ($1, $2, $3, $4)'
    console.log(request.body)
    client.query(query, [request.body.playlistId, request.body.title, request.body.uri, request.body.masterID])
        .then(result => {
            sendResponse(response, result)
        })
})

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
