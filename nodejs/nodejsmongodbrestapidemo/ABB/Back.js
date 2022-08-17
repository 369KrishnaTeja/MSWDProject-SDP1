var express=require('express')
var mongoose=require('mongoose')
var cors=require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

mongoose.connect("mongodb://localhost:27017/Registered", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const regSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    DOB: String,
    Phone: Number
})

const User = new mongoose.model("Registered", regSchema)

app.post("/register", (req, res)=> {
    const { name, email, password,DOB,Phone} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                DOB,
                Phone
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(2022,() => {
    console.log("BE started at port 2022")
})