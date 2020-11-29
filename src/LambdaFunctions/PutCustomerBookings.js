//https://uwveaj59jf.execute-api.us-east-1.amazonaws.com/dev/customerbookings
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

exports.handler = (event, context, callback) => {
  var docClient = new AWS.DynamoDB.DocumentClient();
  
  var table = "CustomerBookings";
  var params = {
      TableName:table,
      Item: {
        'BookingId' : new Date().getTime(),
        'ChefName' : event.chefName,
        'ChefEmail' : event.chefEmail,
        'CustName' : event.custName,
        'Date' : event.selectedDate,
        'NumberOfHoursBooked' : event.hours,
        'Slot' : event.slot,
        'TotalPrice' : event.totalPrice
      }
  };
  
  console.log("Adding a new item to CustomerBookings table");
  docClient.put(params, function(err, data) {
      if (err) {
          console.error("Unable to add item to CustomerBookings table. Error JSON:", JSON.stringify(err, null, 2));
          callback(err, null);
      } else {
          console.log("Added item to CustomerBookings table:", JSON.stringify(data, null, 2));
          callback(null, JSON.stringify(data));
      }
  });
};
