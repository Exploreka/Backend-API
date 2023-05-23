import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config()

const db = new Sequelize (process.env.NAME_DATABASE, process.env.NAME_DATABASE_ROOT, process.env.NAME_DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
