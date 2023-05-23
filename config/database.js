import * as pg from "pg"
import dotenv from "dotenv";
dotenv.config()

const db = new pg.Pool ({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
});

export default db;
