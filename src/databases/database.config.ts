import { IDatabaseConfig } from './interface/dbConfig.interface';

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "chemical",
    database: process.env.DB_NAME_DEVELOPMENT || "User",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};