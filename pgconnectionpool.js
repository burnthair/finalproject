// var pg = require('pg');
// var pool = require("./pg­connection­-pool");
// var url = require('url');

// try {
//     require('dotenv').config();
// } catch (e) {

// }

var url = require('url');

///creates instnaces of pg references
const { Pool, Client } = require('pg')

try {
    require('dotenv').config();
} catch (e) {

}

///console logs connection credentials as a check
console.info('DATABASE_URL:', process.env.DATABASE_URL);
var params = url.parse(process.env.DATABASE_URL);
var auth = params.auth.split(':');

//config is fed into connction pool, supplies database credentials
var config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: params.hostname !== 'localhost'
};

// const pool= 
///Export pool with db credentials for use in routing
    module.exports.pool = new Pool(config);






// module.exports = connectionString;