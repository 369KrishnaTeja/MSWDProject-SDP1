var express = require('express')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }));
app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/index.html');
}
)
app.post('/submit',function(req,res)
{
  var fname = req.body.fname
  var lname = req.body.lname
   var name = fname+" "+lname
   res.send(name)
   console.log(name)
}
)
var server = app.listen(2020,function(){
    console.log("Server is Running")
    })