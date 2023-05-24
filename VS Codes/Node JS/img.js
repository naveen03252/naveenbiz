var express=require("express")
app=express()
app.use(express.json())
var fs=require("fs")
var sharp=require("sharp")
const mysql=require("mysql")
const base64Img = require('base64-img');

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Karthik@123",
    database:"image"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connection is online for mysql")
})
app.post("/uploadimg", (req, res) => {
    let sql = "insert into img(image)values('" + base64str + "');";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/importimg",(req,res)=>{
    let sql="select image from img"
    con.query(sql,(err,result)=>{
            if (err)throw err;
            console.log(result[0].image)
            const data= result[0].image;
            const buffer = Buffer.from(data, "base64")
            fs.writeFileSync("new-path.jpg", buffer);
    })
})
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString("base64");
}
// function convertBase64ToImage(base64String) {
//     const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  
//     const imageBuffer = Buffer.from(base64Data, 'base64');
  
//     fs.writeFileSync('decoded.jpg', imageBuffer);
  
//     console.log('Image saved successfully!');
//   }
// var base64str = base64_encode("kitten.jpg");
const base64String = base64_encode("kitten.jpg");
const imagePath = 'output.jpg';
base64Img.imgSync(base64String, imagePath);

base64Img.img(base64String, imagePath, (err, filePath) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image saved successfully:', filePath);
    }
  });
  
// convertBase64ToImage(base64String);
app.listen(8000,()=>{
    console.log("connection is stable")
})