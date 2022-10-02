const express = require('express')
const app = express();
const {port} = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')

//db
require('./db/mogoose');

//parsery 
//Content-type: application/json
app.use(bodyParser.json())

//routes
//uzywanie sciezek '/' dolacza do glownej
app.use('/api', apiRouter)


//server
app.listen(port ,()=> {
    console.log('server ...')
})