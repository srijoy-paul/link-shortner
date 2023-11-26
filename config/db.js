const { Sequelize } = require("sequelize");
const createDB = new Sequelize("url-shortner-DB", "srijoy", "srijoy@1507", {
    dialect: "sqlite",
    host: "./config/db.sqlite"
});

module.exports = createDB;