var express=require("express")
var app=express();
app.use(express.json())
const cors = require("cors")
app.use(cors())

const mysql = require("mysql")
const con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Karthik@123",
    database:"f_e_login"
})  
con.connect(function(err){
    if(err) throw err
    console.log("connected to mysql")
})

app.post("/login",(req,res)=>{
    username=req.body.username
    passwd=req.body.passwd 
    let a = "call login_pro('"+username+"','"+passwd+"');"
    con.query(a,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send(result)
    })
})


app.listen(8000,()=>{
    console.log("Connected!!")
})