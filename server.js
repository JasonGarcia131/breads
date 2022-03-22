//DEPENDENCIES
const express = require('express');

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express();

//ROUTES
app.get('/', (req,res)=>{

    res.send('Welcome to an awesome App about bread!')

})

//Breads
const breadsController = require('./controllers/controller.js')
app.use('/breads', breadsController)
// app.use('/array', breadsController)

app.listen(PORT, ()=>{

    console.log('Listening at port: ', PORT)

})

