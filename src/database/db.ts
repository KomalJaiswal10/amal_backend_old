import { Sequelize } from "sequelize";
import "dotenv/config";


const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    logging: true,
});


try {
    sequelize.authenticate();
    console.log(`Database connected`);
} catch (error) {
    console.error(`Unable to connect database : ${error}`)
}



