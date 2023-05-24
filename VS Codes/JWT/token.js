const express = require("express")
const mysql = require("mysql")
const cors =  require("cors")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json());

app.use(cors());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Karthik@123",
    database: "f_e_login",
  });

  con.connect((err)=>{
    if (err) throw err
    else{
        console.log("connected to mysql")
    }
  })

  function tokenVerify(req,res,next){
    const bearer = req.headers["authorization"]
    console.log(bearer)
    if(typeof bearer !== "undefined"){
        const bearerToken = bearer.split(" ")[1]
        req.token = bearerToken;
        jwt.verify(req.token,"model",(err,authData)=>{
            if(err) {
                res.sendStatus(403)
            } else{
                next();
            }
        })
    }else{
        res.sendStatus(403);
    }
  }

  app.post("/login",(req,res)=>{
    let id = req.body.id
    let s = 'select * from login where id = "'+id+'"'
    con.query(s,(err,result)=>{
        if (err) throw err
        const a = result[id] 
        console.log(result[id])
        res.send(result[id])
        jwt.sign({user:a},"model",(err,token)=>{
            res.json({token,});
    })
    
    // let username = req.body.username
    // let passwd=req.body.passwd
    // const user = {
    //     username:username,
    //     passwd:passwd
    // };
    });
  });

  app.post("/getdata",tokenVerify,(req,resp)=>{
    resp.send("Data from getdata")
  });

  app.listen(9000, () => {
    console.log("listening to 9000");
  });
  
  








