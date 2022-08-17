 // inserting documents into collection

var MongoClient=require("mongodb").MongoClient

const url="mongodb://localhost:27017/customer" //server path

//empdemo - database name db - database object

MongoClient.connect(url,function(err,client)
{
    var db=client.db("customer")
    var collection = db.collection("Details")
    var data=[{custid:101,Custname:"Krishna",gender:"male"},{custid:102,Custname:"Teja",gender:"male"},{custid:103,Custname:"Madhu",gender:"female"},{custid:104,Custname:"Reena",gender:"female"}]
    collection.insertMany(data,(err,resuly)=>
    {
        if(err)
        console.log(err)
        console.log("Documents inserted successfully")
    })

})