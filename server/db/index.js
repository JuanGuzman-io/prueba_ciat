require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};