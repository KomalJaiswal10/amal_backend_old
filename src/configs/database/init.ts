import db from './db';

const isDev: boolean = (process.env.APP_ENV || 'production') === 'developement';

const dbInit = async () => {
    await db.sync({ alter: isDev }).then(() => console.log(`Database sync `)).catch((err) => console.log(`Database Error : ${err}`))
}

export default dbInit;