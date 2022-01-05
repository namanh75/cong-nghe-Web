const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const route = require('./routes')
const db = require('./config/database/index')


app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

//views engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname, 'resources/views'))

const port = 5000

//routing
route(app)

//connect
db.connect()

//listen
app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})