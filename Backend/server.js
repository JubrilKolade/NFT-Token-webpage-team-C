const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./app/models')
const nunjucks = require('nunjucks')

const app = express()

global.__basedir = __dirname

dotenv.config()
app.use(cors())

// Set up Global configuration access
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app,
})

const APP_DEBUG = process.env.APP_DEBUG || 'true'

db.sequelize
    .sync(APP_DEBUG.toLowerCase() == 'true' ? { force: true } : {})
    .then(() => {
        if (APP_DEBUG.toLowerCase() == 'true') {
            // seedDatabase()
        }
        console.log('Drop and Resync Db')
    })
    .catch((err) => {
        console.log('Failed to sync db: ' + err.message)
    })

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Pumpfun!!' })
})

// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/token.routes')(app)

const PORT = process.env.PORT || 8080
const APP_URL = process.env.APP_URL || 'http://localhost'

app.listen(PORT, () => {
    console.log(`Server listening at ${APP_URL}:${PORT}`)
})

module.exports = app