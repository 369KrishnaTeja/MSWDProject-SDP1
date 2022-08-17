const express=require('express')
const app=express()
const studentExpressRoute=express.Router()
let StudentSchema=require("../model/student.model")
studentExpressRoute.route('/add').post((req,res,next)=>
{
StudentSchema.insertMany(req.body,(error,data)=>
{
if(error)
{
    return next(error) //or use throw instead of next
}
else
{
    res.json(data)
}
})
})
studentExpressRoute.route('/display').get((req,res)=>
{
StudentSchema.find((error,data)=> {
    if(error)
    {
        return next(error)
    }
    else
    {
        res.json(data)
    }
})
})
studentExpressRoute.route("/getstudent/:id").get((req,res)=>
{
    StudentSchema.findById(req.params.id,(error,data)=>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            res.json(data)
        }
    })
}
)
studentExpressRoute.route("/update/:id").put((req,res,next)=>
{
StudentSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>
{
    if(error)
    {
        return next(error)
    }
    else
    {
        res.json(data)
        console.log("Student Document Updated Successfully")
    }
})
})
studentExpressRoute.route("/delete/:id").put((req,res,next)=>
{
    StudentSchema.findByIdAndRemove(req.params.id,(error,data)=>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            res.status(200).json(
                {
                    msg:data
                })
        }
    })
})
module.exports=studentExpressRoute