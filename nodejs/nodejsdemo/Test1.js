var express = require('express')

var app = express()

app.route('/').get(function(req,res)

{

    res.send("Demo")

})

app.route('/klu').get(function(req,res)

{

    res.send("KLU")

})

app.get('/klef',function(req,res)

{

    res.send("KLEF")

})

var server = app.listen(2020,function(){})