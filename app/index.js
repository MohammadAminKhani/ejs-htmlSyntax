var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
  res.render('index1',{
    pageTitle:'Home',
    pageID:'home'
  })
})

module.exports = router
