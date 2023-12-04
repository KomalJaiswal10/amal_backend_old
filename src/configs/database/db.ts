import { Sequelize } from "sequelize";
import "dotenv/config";


const db: Sequelize = new Sequelize({
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
} catch (error) {
    console.log(`Unable to connect database : ${error}`)
}

export default db;

