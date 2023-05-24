var AWS = require("aws-sdk");

// const aws_remote_config = {
//  "region": "ap-south-1",
//  "accessKeyId": "ASIAU26NHLT7LYHVQI6B",
//  "secretAccessKey": "iV9MRS6pBIquxGEpV5OndPE7X2isZBQtiCn6ZKDj"
// };
// AWS.config.update(aws_remote_config);

const docClient = new AWS.DynamoDB.DocumentClient();

//read
const params = {
  TableName: "users",
};
docClient.scan(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});


//insert
// const insertparams = {
//   TableName: "users",
//   Item: {
//     id: 10,
//     username: "Naveen",
//     password: "123abc"
//   },
// };
// docClient.put(insertparams,function (err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })
