var fs=require('fs')
//utf-8 is an encoding system (it accepts more than 1 lakh characters) - Multi byte processing
fs.readFile("demo.txt","utf-8",(err,data)=>
{
if(err)
{
    console.log(err)
}
console.log(data)
}
)