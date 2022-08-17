// connecting to mongoDB Database

var MongoClient=require("mongodb").MongoClient

const url="mongodb://localhost:27017/empdemo" //server path

//empdemo - database name db - database object

MongoClient.connect(url,function(err,client)
{
    if(!err)
    {
        console.log("Connection established Successfully")
    }
    else
    {
        console.log("Error in Connection")
    }
})
