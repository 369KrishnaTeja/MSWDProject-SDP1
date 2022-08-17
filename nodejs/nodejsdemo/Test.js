var express=require('express')

var app=express()

app.get('/',function(req,res)
{
    res.send("Hello Express JS")
}
)

app.get('/demo',function(req,res)
{
    res.send("Hello demo User")
}
)

app.get('/klu',function(req,res)
{
    res.send("Hello KLU")
}
)

var server =app.listen(2021,function(){})

//callback - passing function body as an argument