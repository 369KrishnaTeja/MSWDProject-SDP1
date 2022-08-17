var MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/customer" // server path
// empdemo - database name
// db - database object
MongoClient.connect(url,function(err,client)
    {
        // using client object, create db object
        var db = client.db("customer") // empdemo - database name
        // Employee - collection name
var collection = db.collection("Details")
var condition = {custid:103}
var newvalues1 = { $set : {Custname:"Joy"}  }
collection.updateMany(condition,newvalues1,function(err,result)
{
    if(err) console.log(err)
    else
    {
    console.log("Documents Updated successfully")
    console.log(result)
    }
}
)
})