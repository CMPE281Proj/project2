'use strict';

const AWS = require('aws-sdk');
let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10', convertEmptyValues: true });
var ses = new AWS.SES({ region: 'us-east-1' });

module.exports.saveBookingHistory = async function (chefName, cuisine, reserveDate, bookingSlot, customerName, custEmail) {
  console.log('Saving data to CustomerBookings table');

  // get the chef price

  let params = {
    TableName: 'ChefTable',
    FilterExpression: '#chefName = :chefName',
    ExpressionAttributeNames: {
      '#chefName': 'Name'
    },
    ExpressionAttributeValues: {
      ':chefName': { 'S': chefName }
    },
    ProjectionExpression: 'Price, Email'
  };

  let chefPrice = 25; //default chef price
  let chefEmail = '';

  ddb.scan(params,
    function (err, data) {
      console.log('data ---', data);
      if (err) {
        console.log(err);
      } else {

        console.log('chef data items : ', JSON.stringify(data, null, 2));
        console.log('chef table data ---', data.Items);
        data.Items.forEach(function (chef) {
          chefPrice = chef.Price.N;
          chefEmail = chef.Email.S;
        })
      }
      // return JSON.stringify(data, null,2);
    });

  // var chefDetails = JSON.parse(dataItems.getItem())
  params = {}; //clear the params

  //SAVE THE BOOKING RESERVATION 
  const item = {};
  const bkid = new Date().getTime();

  item.BookingId = bkid;
  item.ChefName = chefName;
  item.CustName = customerName;
  item.Date = reserveDate;
  item.NumberOfHours = 2;
  item.Slot = [bookingSlot];
  item.PaymentStatus = 'Pending';
  item.CustEmail = custEmail;
  item.ChefEmail = chefEmail;

  item.TotalPrice = 2 * chefPrice;

  ddb = new AWS.DynamoDB.DocumentClient();

  params = {
    TableName: 'CustomerBookings',
    Item: item
  };

  ddb.put(params, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });

  console.log('Email ----', chefEmail);
  // update data in chefTable 

  params = {};
  ddb = new AWS.DynamoDB.DocumentClient();
  params = {
    TableName: "ChefTable",
    Key: {
      Email: chefEmail
    },
    UpdateExpression: "set ChefSlots = :ChefSlots",
    ExpressionAttributeValues: {
      ":ChefSlots": [bookingSlot]
    },
    ReturnValues: "updated"
  };

  ddb.update(params);

  // send Email once confirmed
  const msgData = 'Your FindMyChef booking#' + bkid + ' has been confirmed !!';
  params = {
    Destination: {
      ToAddresses: [custEmail],
    },
    Message: {
      Body: {
        Text: { Data: 'That was a wonderful choice !! Enjoy Home Food !' },
      },

      Subject: { Data: msgData },
    },
    Source: 'findmychefs@gmail.com',
  };

  ses.sendEmail(params).promise();

  return item;
}

module.exports.getAllChefNames = function () {
  // const AWS = require('aws-sdk');
  // var ddb =  new AWS.DynamoDB({apiVersion: '2012-08-10', convertEmptyValues: true});

  // console.log('event ---', event);
  // const data = {};
  const params = {
    TableName: 'ChefTable',
    ExpressionAttributeNames: {
      '#chefName': 'Name'
    },
    ProjectionExpression: '#chefName'
  };

  const chefList = ddb.scan(params, onscan);
  function onscan(err, data) {
    let chefNames = [];
    if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
      // chefNames = data.Items;
      console.log(data.Items);
    }
    return chefNames;
  }
  console.log('cheflist---', chefList);
  return chefList;
}
