var AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const dynamodb = new AWS.DynamoDB();

function searchCustomerByName(name, callback) {
    const params = {
      TableName: 'customertable', // Replace with your DynamoDB table name
      FilterExpression: 'customer_name = :name',
      ExpressionAttributeValues: {
        ':name': { S: name } // Assuming 'customer_name' is of type String (S)
      }
    };
  
    dynamodb.scan(params, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data.Items);
      }
    });
  }
  
  const customerName = 'naveen';

searchCustomerByName(customerName, (err, items) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Customers found:', items);
  }
});
