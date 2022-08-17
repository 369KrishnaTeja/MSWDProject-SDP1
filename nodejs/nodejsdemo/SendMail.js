//Sending an email using node js

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(
    {
        service : "gmail",
        auth : 
        {
            user : "krishnatejakt369@gmail.com",
            pass : "hyma@123@"
        }
    }
)

var mailOptions =
{
    from : "krishnatejakt369@gmail.com",
    to : "suryakiranmtechcse@gmail.com",
    subject : "Sending mail",
    //text : "Hello Sir I am Krishna Teja"
    html : "<font color=green>Hello Sir I am Krishna Teja</font>"
}

transporter.sendMail(mailOptions,function(error,info)
{
    if(error)
    {
        console.log(error);
    }
    else
    console.log("Email sent successfully");
})