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

app.post('/signup',(req,res)=>{
    first_name=req.body.first_name
    last_name=req.body.last_name
    email=req.body.email
    passwd=req.body.passwd 
    let s='insert into sign_up(first_name,last_name,email,passwd) values("'+first_name+'","'+last_name+'","'+email+'","'+passwd+'");'
    con.query(s,(err,result)=>{
        if(err){
            throw err
        }
        console.log("account has been created")
        res.send("account has been created")

    })
})

app.listen(8000,()=>{
    console.log("Connected!!")
})
