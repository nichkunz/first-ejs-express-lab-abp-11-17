var express = require('express')
var app = express()

// Build Your Route Here
app.get('/', function(req, resp){
  const viewData = {welcomePhrase: "Hello, World from Express and EJS!"}
  resp.render('index', viewData)
})

// app.get('/about', function(req, resp){
//   const viewData = {thingsInMyBrain: {"Computer", "dynamically create things?", "Model, View, Controller"}}
//   resp.render('about', viewData)
// })

module.exports = app
