const express = require('express')
const app = express();
const {port} = require('./config')
const apiRouter = require('./routes/api')

//db
require('./db/mogoose');

//routes
//uzywanie sciezek '/' dolacza do glownej
app.use('/', apiRouter)


//server
app.listen(port ,()=> {
    console.log('server ...')
})