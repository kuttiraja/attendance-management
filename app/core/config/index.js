require('dotenv').config();

module.exports = {
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT || 8080,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_SCHEMA: process.env.DB_SCHEMA,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    LOG_TO_FILE_OR_CONSOLE: process.env.LOG_TO_FILE_OR_CONSOLE || 'CONSOLE',
}
