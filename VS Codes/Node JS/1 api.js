var express=require("express")
var app=express();
app.use(express.json())


app.post("/sample",(req,res)=>{
    console.log("Hi my first api!!")
    res.send("Hi my first api!!")
})
app.post("/add",(req,res)=>{
    let a=10
    let b = 5
    res.send(a+b+" ")
    console.log(a+b)
})

app.post("/addition",(req,res)=>{
    let val1=req.body.a
    let val2=req.body.b
    console.log(val1+val2)
    res.send(val1+val2)

})
app.post("/subtraction",(req,res)=>{
    let val1=req.body.a
    let val2=req.body.b
    let d = val1-val2
    console.log(d)
    res.send(d+" ")
    
})
app.post("/multiplication",(req,res)=>{
    let val1=req.body.a
    let val2=req.body.b
    console.log(val1*val2)
    res.send(val1*val2+" ")
    
})
app.post("/division",(req,res)=>{
    let val1=req.body.a
    let val2=req.body.b
    console.log(val1/val2)
    res.send(val1/val2+" ")
    
})


app.listen(8000,()=>{
    console.log("Connected!!")
})