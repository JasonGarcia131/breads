//DEPENDENCIES
const express = require('express');

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express();

//MIDDLEWARE
 app.set('views', __dirname + '/views');
 app.set('view engine', 'jsx')
 app.engine('jsx', require('express-react-views').createEngine())
 app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))


//ROUTES
app.get('/', (req,res)=>{

    res.send('Welcome to an awesome App about bread!')

})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
// app.use('/array', breadsController)

// 404 Page
app.get('*', (req,res)=>{

    res.send('404')

 })


app.listen(PORT, ()=>{

    console.log('Listening at port: ', PORT)

})

