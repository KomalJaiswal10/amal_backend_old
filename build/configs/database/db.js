"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const db = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    logging: console.log,
});
try {
    db.authenticate();
    console.log(`Database connected`);
}
catch (error) {
    console.log(`Unable to connect database : ${error}`);
}
exports.default = db;
