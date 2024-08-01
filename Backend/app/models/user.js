'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }
    
    User.init(
        {
            username: DataTypes.STRING,
            wallet_address: DataTypes.STRING,
            password: DataTypes.STRING,
            follower_count: DataTypes.INTEGER,
            following_count: DataTypes.INTEGER,
            like_count: DataTypes.INTEGER,
            mention_count: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: 'users',
            modelName: 'User',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    )
    return User
}
