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
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'question'
    }
);

module.exports = Question;