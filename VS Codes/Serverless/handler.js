'use strict';
var mysql=require("mysql")
const con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Karthik@123",
  database:"hekto 2.0"
})
con.connect(function(err){
  if(err){
      console.log(err)
  }
  console.log("connection is online for mysql")
})
module.exports.login = async (event) => {
  const req= JSON.parse(event.body);
  let username=req.username;
  let password=req.password;
  let s='call login_pro("'+username+'","'+password+'")'
  console.log("values",s);
  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result[0]);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
  
};

module.exports.signup = async (event) => {
  const req= JSON.parse(event.body);
  let first_name=req.first_name;
  let last_name = req.last_name;
  let email=req.email;
  let passwd=req.passwd;

  let a='insert into sign_up(first_name,last_name,email,passwd) values("'+first_name+'","'+last_name+'","'+email+'","'+passwd+'");'
  console.log("values",a);
  let result=await new Promise((resolve,reject)=>{
    con.query(a,function(err,result){
      if (err) resolve (err);
      else{
       console.log("account has been created");
       resolve("account has been created");
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
 
};

module.exports.subscription = async (event) => {
  const req= JSON.parse(event.body);
  let email=req.email
  let id = req.id
  let subscription_status=req.subscription_status

  let a='call sub_pro("'+id+'","'+email+'","'+subscription_status+'");'
  console.log("values",a);
  let result=await new Promise((resolve,reject)=>{
    con.query(a,function(err,result){
      if (err) resolve (err);
      else{
       console.log("updated");
       resolve("updated");
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};


module.exports.search = async (event) => {
  const req= JSON.parse(event.body);
  let value = req.value
  let a='call search("'+value+'");'
  console.log("values",a);
  let result=await new Promise((resolve,reject)=>{
    con.query(a,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
 
};

module.exports.addtocard = async (event) => {
  const req= JSON.parse(event.body);
  let email=req.email
  let quantity=req.quantity
  let product_name=req.product_name
  let s='call addto_cart("'+email+'","'+quantity+'","'+product_name+'")'
  console.log("values",s);
  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
 
};

module.exports.wishlist = async (event) => {
  const req= JSON.parse(event.body);
  let email=req.email;
  let productname=req.productname;
  let s = 'call atw("'+email+'","'+productname+'");'
  console.log("values",s);
  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};


module.exports.sidebar = async (event) => {
  const req= JSON.parse(event.body);
  let product_brand = req.product_brand
  let discount = req.discount
  let rating = req.rating
  let category = req.category
  let product_price = req.product_price
  let colour = req.colour
  let s = 'call shop_left("'+product_brand+'","'+discount+'","'+rating+'","'+category+'","'+product_price+'","'+colour+'");'
  console.log("values",s);
  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};

