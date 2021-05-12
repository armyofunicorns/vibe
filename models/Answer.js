const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model { }

Answer.init(
    {
        answerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        answerText: {
            type: DataTypes.STRING(5000),
            allowNull: true,
        },
        questionID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'question',
                key: 'questionID'
            }
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'user',
                key: 'userID'
            },
            unique: 'compositeIndex'
        },
        date: {
            type: DataTypes.DATEONLY,
            unique: 'compositeIndex',
            allowNull: false
        },
        delFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'answer'
    }
);

module.exports = Answer;