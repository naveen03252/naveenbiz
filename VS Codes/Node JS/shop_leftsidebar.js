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

app.post('/shop_leftsidebar',(req,res)=>{
   let product_brand = req.body.product_brand
   let discount = req.body.discount
   let rating = req.body.rating
   let category = req.body.category
   let product_price = req.body.product_price
   let colour = req.body.colour
    let s = 'call shop_left("'+product_brand+'","'+discount+'","'+rating+'","'+category+'","'+product_price+'","'+colour+'");'
    con.query(s,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send(result)
        
    })
    
})


app.listen(8500,()=>{
    console.log("Connected!!")
})
