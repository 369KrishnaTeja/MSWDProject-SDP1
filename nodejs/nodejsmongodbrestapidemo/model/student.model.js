const { MongoGridFSChunkError } = require('mongodb')
const mongoose=require('mongoose')
const Schema=mongoose.Schema
let studentSchema=new Schema(
    {
        username:{
            type:String
        },
        password:{
            type:String
        },
        
    },{
        collection:'students'
      })
module.exports=mongoose.model('StudentSchema',studentSchema)