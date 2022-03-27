const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req,res)=>{

    res.render('index',{breads: Bread})
    //res.send(Bread)

})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
res.send(Bread[req.params.arrayIndex])
   })

// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten === 'true'
    } else {
      req.body.hasGlutten === 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })

module.exports = breads;