const express = require('express')
const app = express();
const {port} = require('./config')

//routes

const apiRouter = require('./routes/api')

//uzywanie sciezek '/' dolacza do glownej
app.use('/', apiRouter)

app.listen(port ,()=> {
    console.log('server ...')
})