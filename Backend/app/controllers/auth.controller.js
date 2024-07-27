const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// const { addEmailJobToQueue } = require("../config/queue");

let jwtSecretKey = process.env.JWT_SECRET_KEY

function generateToken(userId) {
    const token = jwt.sign({ userId }, jwtSecretKey)
    return token
}

// Create a hashed password
const hashedPassword = bcrypt.hashSync('password', 8)

exports.signup = async (req, res) => {
    try {
        const {
            wallet_address,
        } = req.body

        // Save User to Database
        const user = await User.create({
            username: wallet_address+'002',
            wallet_address: wallet_address,
            password: hashedPassword,
        })

        const token = generateToken(user.id)

        return res.status(201).send({
            id: user.id,
            username: user.username,
            wallet_address: user.wallet_address,
            access_token: token,
            message: 'Welcome User',
        })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            wallet_address: req.body.wallet_address,
        },
    })
        .then((user) => {
            if (!user) {
                return res.status(404).send({ message: 'User Not found.' })
            }

            var token = generateToken(user.id)

            res.status(200).send({
                id: user.id,
                username: user.username,
                wallet_address: user.wallet_address,
                accessToken: token,
            })
        })
        .catch((err) => {
            res.status(500).send({ message: err.message })
        })
}
