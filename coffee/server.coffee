express = require('express')
path = require('path')
bodyParser = require('body-parser')
routes = require('./routes')

app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({
  extended: true
}))

routes.registerRoutes(app)

module.exports = app
