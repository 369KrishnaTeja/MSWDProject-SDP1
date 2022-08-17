var MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/customer" // server path
// empdemo - database name
// Employee - collection name
// db - database object
MongoClient.connect(url,function(err,client)
    {
        // using client object, create db object
        var db = client.db("customer") 

var collection = db.collection("Details")
collection.find({}).toArray((err,customers)=>
{
    if(err)
    {
        console.log(err)
    }
    console.log("Customer Documents")
    console.log(customers)
}
)
    })