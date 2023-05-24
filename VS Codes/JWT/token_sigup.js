const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
const jwt = require("jsonwebtoken");
const cors = require("cors")
app.use(cors())

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Karthik@123",
  database: "f_e_login",
});
con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});
app.post("/signup", (req, res) => {
    var user1 = {
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "email":req.body.email,
    "passwd":req.body.passwd    
    }
    jwt.sign({ user: user1 }, user1.email, (err, token) => {
    if(err) throw err;
    let sql = 'insert into sign_up(first_name,last_name,email,passwd,token) values("'+user1.first_name+'","'+user1.last_name+'","'+user1.email+'","'+user1.passwd+'","'+token+'");';
    con.query(sql, (err, result) => {
      if (err){ throw err }
      else{
        console.log("created")
        res.send("created")
      }
        });
    })
})

app.listen(8000, () => {
  console.log("listening to 8000");
});