var express = require('express')
var app = express()

app.locals.siteTitle = 'dadashi site'

app.set('view engine','ejs')
app.set('views','app')


app.use(require('./index'))

var server = app.listen(3000)
