var http=require('http')

//require method is used to import pre defined /user defined modules
//req - request res - responce
//client will make a request to the server using URL
http.createServer(function(req,res)
{
    res.write("Hello MSWD S9, we are going to KILL Node JS")
    res.end()
}).listen(2021) // we are going to access this web server by using a port number