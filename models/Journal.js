const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model { }

Journal.init(
    {
        journalID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        journalNote: {
            type: DataTypes.STRING(5000),
            allowNull: true,
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
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        moodID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'mood',
                key: 'moodID'
            }
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
        modelName: 'journal'
    }
);

module.exports = Journal;