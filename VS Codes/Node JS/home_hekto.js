var express=require("express")
var app=express();
app.use(express.json())

const mysql = require("mysql")
const con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Karthik@123",
    database:"hekto 2.0"
})  
con.connect(function(err){
    if(err) throw err
    console.log("connected to mysql")
})

app.post('/signup',(req,res)=>{
    email=req.body.email
    password=req.body.password
    password1=req.body.password1
    let s='call signup("'+email+'","'+password+'","'+password1+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})
app.post('/login',(req,res)=>{
    email=req.body.email
    password=req.body.password
    let s='call login("'+email+'","'+password+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/search',(req,res)=>{
    value = req.body.value
    let s='call search("'+value+'");'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/home/addto_cart',(req,res)=>{
    email=req.body.email
    quantity=req.body.quantity
    product_name=req.body.product_name
    let s='call addto_cart("'+email+'","'+quantity+'","'+product_name+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/home/wishlist',(req,res)=>{
    var condition=req.body.condition
    if(condition=="list"){
        var s='select * from wishlist;'
        con.query(s,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
            res.send(result)
        })
    }
    else if(condition=="add"){
        var prod_name=req.body.product_name
        var user_id=req.body.user_id
        var s='call atw ("'+prod_name+'","'+user_id+'");'
        con.query(s,(err,result)=>{
            if(err){
                throw err
            }
            console.log("added successfully")
            res.send("added successfully")
        })
    }
    else if(condition=="remove"){
        var prod_name=req.body.product_name
        var user_id=req.body.user_id
        var s='delete from wishlist where product_name="'+prod_name+'"and refuser_id ="'+user_id+'";'
        con.query(s,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
            res.send(result)
        })
    }
})

app.post('/subscription',(req,res)=>{
    let email=req.body.email
    let id = req.body.id
    let subscription_status=req.body.subscription_status
    let s = 'call sub_pro("'+id+'","'+email+'","'+subscription_status+'");'
    con.query(s,(err,result)=>{
        if(err) throw err
        console.log("updated")
        res.send("updated")
    })
    
})



app.listen(8500,()=>{
    console.log("Connected!!")
})

