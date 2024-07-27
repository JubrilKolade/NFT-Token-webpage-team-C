const { User, Business } = require('../models')
const jwt = require('jsonwebtoken')

let jwtSecretKey = process.env.JWT_SECRET_KEY

function generateToken(userId) {
    const token = jwt.sign({ userId }, jwtSecretKey)
    return token
}

checkDuplicateWalletAddressUser = (req, res, next) => {
    User.findOne({
        where: {
            wallet_address: req.body.wallet_address,
        },
    }).then((user) => {
        if (user) {
            var token = generateToken(user.id)
            res.status(200).send({
                id: user.id,
                username: user.wallet_address+'002',
                wallet_address: user.wallet_address,
                access_token: token,
                message: 'Welcome User',
            })
            return
        }
        next()
    })
}

const verifySignUp = {
    checkDuplicateWalletAddressUser: checkDuplicateWalletAddressUser,
}

module.exports = verifySignUp
