const { Model, DataTypes, TIME} = require('sequelize');
const sequelize = require('../config/connection');
const { beforeCreate, beforeUpdate } = require('./Mood');
const bcrypt = require('bcrypt');

// create user model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define table columns and configuration
User.init(
    {
        // define an id column
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        //define username column
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        delFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        // Unix timestamp for last time user logged in
        lastLogin: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        // don't pluralize name of database table
        freezeTableName: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;
