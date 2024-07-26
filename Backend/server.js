const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
// const db = require('./app/models')
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

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to GoNow!!' })
})

const PORT = process.env.PORT || 8080
const APP_URL = process.env.APP_URL || 'http://localhost'

app.listen(PORT, () => {
    console.log(`Server listening at ${APP_URL}:${PORT}`)
})

module.exports = app