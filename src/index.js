const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/database/index')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const app = express()

//public file
app.use(express.static(path.join(__dirname, 'public')))

//morgan
app.use(morgan('combined'))

//views engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname, 'resources/views'))

//body parser
app.use(bodyParser.urlencoded({extended: true}))

//cookies
app.use(cookieParser())

//use other method (PUT, DELETE)
app.use(methodOverride('_method'))

//routing
route(app)

//connect
db.connect()

//listen
const port = 5000

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})