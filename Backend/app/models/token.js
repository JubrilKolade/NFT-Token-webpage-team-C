'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Token extends Model {
        static associate(models) {
            // define association here
        }
    }
    
    Token.init(
        {
            type: DataTypes.STRING,
            creator_address: DataTypes.STRING,
            token_address: DataTypes.STRING,
            name: DataTypes.STRING,
            symbol: DataTypes.STRING,
            supply: DataTypes.STRING,
            description: DataTypes.TEXT,
            website_link: DataTypes.STRING,
            twitter_link: DataTypes.STRING,
            telegram_link: DataTypes.STRING,
            metadata_url: DataTypes.STRING,
            discord_link: DataTypes.STRING,
            token_immutable: DataTypes.INTEGER,
            revoke_freeze_authority: DataTypes.INTEGER,
            revoke_mint_authority: DataTypes.INTEGER,
            holders_count: DataTypes.INTEGER,
        },
        {
            sequelize,
            tableName: 'tokens',
            modelName: 'Token',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    )
    return Token
}
