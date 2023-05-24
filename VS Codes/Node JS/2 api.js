var express=require("express")
var app=express();
app.use(express.json())

const mysql = require("mysql")
const con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Karthik@123",
    database:"project_1"
})  
con.connect(function(err){
    if(err) throw err
    console.log("connected to mysql")
})

app.post("/db",(req,res)=>{
    let sql = "select * from sign_in;"
    con.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send(result)
    })
})


app.post('/signup',(req,res)=>{
    first_name=req.body.first_name
    last_name=req.body.last_name
    email=req.body.email
    passwd=req.body.passwd 
    id = req.body.id
    let s='insert into sign_in(first_name,last_name,email,passwd,id) values("'+first_name+'","'+last_name+'","'+email+'","'+passwd+'","'+id+'");'
    con.query(s,(err,result)=>{
        if(err){
            throw err
        }
        console.log("account has been created")
        res.send("account has been created")

    })
})


app.post("/log_in",(req,res)=>{
    email=req.body.email
    passwd=req.body.passwd 
    let a = "call valid('"+email+"','"+passwd+"');"
    con.query(a,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send(result)
    })
})


app.listen(9000,()=>{
    console.log("Connected!!")
})