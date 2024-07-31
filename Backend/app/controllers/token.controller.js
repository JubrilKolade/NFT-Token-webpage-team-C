const db = require('../models')
const path = require('path')
const fs = require('fs')
const Token = db.Token
const Op = db.Sequelize.Op

// Create and Save a new Task
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            title: ' can not be empty!',
        })
        return
    }

    const token = {
        type: "token",
        creator_address: req.body.creator_address,
        token_address: req.body.token_address,
        name: req.body.name,
        symbol: req.body.symbol,
        supply: req.body.supply,
        description: req.body.description,
        website_link: req.body.website_link,
        twitter_link: req.body.twitter_link,
        telegram_link: req.body.telegram_link,
        discord_link: req.body.discord_link,
        metadata_url: req.body.metadata_url,
        // user_id: req.user_id,
    }

    Token.create(token)
        .then((token) => {

            res.status(201).send({
                token_id: token.id,
                creator_address: token.creator_address,
                token_address: token.token_address,
                message: 'Token Created',
            })
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the Token.',
            })
        })
}

// Update a Project by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.description) {
        res.status(400).send({
            message: 'Content can not be empty!',
        })
    }

    const id = req.params.id

    Token.findByPk(id)
        .then((data) => {
            if (data) {
                Token.update(req.description, {
                    where: { id: id },
                })
                    .then((token) => {

                        res.send({
                            message: 'Token was updated successfully.',
                        })
                    })
                    .catch((err) => {
                        res.status(500).send({
                            message: 'Error updating Task with id=' + id,
                        })
                    })
            } else {
                res.status(400).send({
                    message: 'Task with id=' + id + ' Not Found',
                })
            }
        })
        .catch((err) => {
            res.status(400).send({
                message: 'Token with id=' + id + 'Not Found',
            })
        })
}

// Retrieve all Tokens from the database.
exports.findAll = (req, res) => {
    const name = req.query.name
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null

    // url: baseUrl + file,
    Token.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tokens.',
            })
        })
}

// Find a single Token with an id
exports.findOne = (req, res) => {
    const id = req.params.id

    Token.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Cannot find Project with id=${id}.`,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error retrieving Project with id=' + id,
            })
        })
}

// Delete a Token with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id

    Token.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Project was deleted successfully!',
                })
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}. Maybe Project was not found!`,
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Could not delete Project with id=' + id,
            })
        })
}

// Delete all Tokens from the database.
exports.deleteAll = (req, res) => {
    Token.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({ message: `${nums} Tokens were deleted successfully!` })
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while removing all Tokens.',
            })
        })
}

// Find all Tokens
exports.findAllProject = (req, res) => {
    Project.findAll()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tokens.',
            })
        })
}
