require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
