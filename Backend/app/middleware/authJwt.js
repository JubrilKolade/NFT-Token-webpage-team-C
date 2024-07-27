const jwt = require('jsonwebtoken')
const { User } = require('../models')

verifyToken = (req, res, next) => {
    let token = req.headers['authorization']

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!',
        })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!',
            })
        }
        req.user_id = decoded.userId

        try {
            const user = await User.findByPk(req.user_id)

            if (!user) {
                return res.status(404).send({
                    message: 'User not found!',
                })
            }

            next()
        } catch (err) {
            return res.status(500).send({
                message: 'Error fetching user data!',
            })
        }
    })
}

const authJwt = {
    verifyToken: verifyToken,
}
module.exports = authJwt
