var express = require('express')
var app = express()

app.set('view engine','ejs')
app.set('views','app')

app.get('/',function(req,res){ 
  res.render('index')
})

var server = app.listen(3000)
