const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient()
var express=require("express")
app=express()

// Function to create the user table
function createorderTable() {
  const params = {
    TableName: 'ordertable',
    KeySchema: [
      { AttributeName: 'orderid', KeyType: 'HASH' } // Primary key attribute
    ],
    AttributeDefinitions: [
      { AttributeName: 'orderid', AttributeType: 'N' } // Attribute definition for the primary key
     // Attribute definition for the email attribute
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };
  dynamodb.createTable(params, (err, data) => {
    if (err) {
      console.error('Error creating user table:', err);
    } else {
      console.log('User table created successfully:', data);
    }
  });
}
function createcustomerTable() {
    const params = {
      TableName: 'customertable',
      KeySchema: [
        { AttributeName: 'customerid', KeyType: 'HASH' } // Primary key attribute
      ],
      AttributeDefinitions: [
        { AttributeName: 'customerid', AttributeType: 'N' } // Attribute definition for the primary key
       // Attribute definition for the email attribute
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
    };
    dynamodb.createTable(params, (err, data) => {
      if (err) {
        console.error('Error creating user table:', err);
      } else {
        console.log('User table created successfully:', data);
      }
    });
  }
  function createproductTable() {
    const params = {
      TableName: 'producttable',
      KeySchema: [
        { AttributeName: 'productid', KeyType: 'HASH' } // Primary key attribute
      ],
      AttributeDefinitions: [
        { AttributeName: 'productid', AttributeType: 'N' } // Attribute definition for the primary key
       // Attribute definition for the email attribute
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
    };
    dynamodb.createTable(params, (err, data) => {
      if (err) {
        console.error('Error creating user table:', err);
      } else {
        console.log('User table created successfully:', data);
      }
    });
  }
//createorderTable();
//createcustomerTable();
//createproductTable();
// var params = {
//     TableName: 'producttable',
//     Item: {
//         "productid": 1,
//         "orderid": 1,
//         "productname": "shirt",
//         "category":"clothing"
//     }
// }
// docClient.put(params, function(err, data) {
//         if (err) {
//            console.error("Unable to write data: ", JSON.stringify(err, null, 2));
//         } else {
//            console.log("PutItem succeeded");
//         }
//     });
app.post('/c_insert',(req,res)=>{
    var {TableName,customerid,address,customername,orderid}=req.body
    var params = {
        TableName:TableName,
        Item:{
            "customerid":customerid,
            "address":address,
            "customername":customername,
            "orderid":orderid
        }
        }
        docClient.put(params, function(err, data) {
            if (err) {
              console.log("Error", err);
              res.send(err)
            } else {
              console.log("Success", data);
              res.send(err)
            }
          });
})
app.post('/o_insert',(req,res)=>{
    var {TableName,orderid,orderdate,productid}=req.body
    var params = {
        TableName:TableName,
        Item:{
            "orderid":orderid,
            "orderdate":orderdate,
            "productid":productid
        }
        }
        docClient.put(params, function(err, data) {
            if (err) {
              console.log("Error", err);
              res.send(err)
            } else {
              console.log("Success", data);
              res.send(err)
            }
          });
})
app.post('/p_search',(req,res)=>{
    var {TableName,searchkey,key}=req.body
    var params = {
        TableName: TableName,
        FilterExpression:'contains(#category,:key)',
        ExpressionAttributeNames:{
            '#category':searchkey
        },
        ExpressionAttributeValues:{
            ':key':key,
        }
      };
        docClient.scan(params, function(err, data) {
            if (err) {
              console.log("Error", err);
              res.send(err)
            } else {
              console.log("Success", data);
              res.send(err)
            }
          });
})

app.use(express.json())
app.listen(8000,()=>{
    console.log("connection is stable on 8000")
})