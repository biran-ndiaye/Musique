const { Client } = require('pg')
// connsection avec la base de donnee pg
let client = {}
function connect () {
    client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'structure_logicielle',
        user: 'postgres',
        password: 'postgres'
    })
    client.connect((error) => {
        if (error) {
            console.error('connection error ', error.stack)
        } else {
            console.log('connected')
        }
    }
    )
}

// requete a notre BD
function query (query, values, resultcallback) {
    client.query(query, values, (error, result) => {
        if (error) {
            throw error
        }
        resultcallback(result)
    })
}
function disconnect () {
    client.end()
}
module.exports = {
    connect: connect,
    disconnect: disconnect,
    query: query
}
