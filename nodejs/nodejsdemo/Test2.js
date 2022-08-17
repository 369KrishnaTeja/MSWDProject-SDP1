var express = require('express');
var klu = express();
klu.get('/display',function(req,res)
{
    res.send("<b><i>Displaying resource</i></b>");
}
)

klu.post('/create',function(req,res)
{
    res.send("Creating resource");
}
)

klu.put('/update',function(req,res)
{
    res.send("Updating");
}
)

klu.delete('/delete',function(req,res)
{
    res.send("Deleting");
}
)

var server = klu.listen(2021,function(){})