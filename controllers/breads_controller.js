const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req,res)=>{
  Bread.find()
    .then(foundBreads =>{
      console.log(foundBreads)
      res.render('index',
      { 
        breads: foundBreads, 
        title: 'Index Page'
      })
    })
})

// CREATE
breads.post('/', (req, res) => {
  console.log(req.body.name)
  req.body.name = req.body.name[0]
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

//NEW
breads.get('/new', (req,res)=>{
  res.render('new')
})

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
   .then(foundBread=>{
    console.log(foundBread)
      res.render('Show', {
        bread:foundBread
    })
  })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
   .then(foundBreads=>{
    res.render('edit', {
      bread: foundBreads
    })
   })
  
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id,req.body,{new: true})
   .then(updatedBread=>{
     res.redirect(`/breads${req.params.id}`)
   })
})

//DELETE
breads.delete('/:id', (req,res)=>{
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread=>{
      console.log('Deleted Bread: ', deletedBread)
      res.status(303).redirect('/breads')
    })
})

module.exports = breads;