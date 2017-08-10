// var pg = require('pg');
// var pool = require("./pg­connection­-pool");
// var url = require('url');

// try {
//     require('dotenv').config();
// } catch (e) {

// }

var url = require('url');
const { Pool, Client } = require('pg')

try {
    require('dotenv').config();
} catch (e) {

}

console.info('DATABASE_URL:', process.env.DATABASE_URL);
var params = url.parse(process.env.DATABASE_URL);
var auth = params.auth.split(':');

var config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: params.hostname !== 'localhost'
};

// const pool= 

    module.exports.pool = new Pool(config);


// var connectionString = "postgres://nqsbobkkinnrzm:2d30e10deb78afa40fbeff9b914554b2d65f6048a9a97107c2f70e9671b4cb60@ec2-54-227-252-202.compute-1.amazonaws.com:5432:/d7ucpjvf53gntj"




// module.exports = connectionString;