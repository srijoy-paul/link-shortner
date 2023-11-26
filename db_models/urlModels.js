const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Url extends Model { };
Url.init(
    {
        longURL: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shortID: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Url"
    }
);

module.exports = Url;