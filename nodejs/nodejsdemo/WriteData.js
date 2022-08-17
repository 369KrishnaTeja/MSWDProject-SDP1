var fs=require('fs')

var data="MEAN STACK WEB DEVELOPMENT"

fs.writeFile("demo.txt",data,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Success......")
}
)