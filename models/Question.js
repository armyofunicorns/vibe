const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
    {
        questionID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        questionText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        delFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'question'
    }
);

module.exports = Question;