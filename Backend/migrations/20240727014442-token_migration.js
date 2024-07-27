"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tokens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      creator_address: {
        type: Sequelize.STRING,
      },
      token_address: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      symbol: {
        type: Sequelize.STRING,
      },
      supply: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      website_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      twitter_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telegram_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      discord_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      token_immutable: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      revoke_freeze_authority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      revoke_mint_authority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      holders_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tokens");
  },
};
