var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {

  var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10', convertEmptyValues: true });
  console.log('event-------', event);

  let fieldValues = new Map();
  fieldValues.set('Rating', event.Rating);
  fieldValues.set('Price', event.Price);

  if (event.Experience !== '') {
    fieldValues.set('Experience', event.Experience);
  }
  if (event.Slots !== null) {
    fieldValues.set('Slots', event.Slots);
  }
  if (event.Date !== '') {
    fieldValues.set('Date', event.Date);
  }
  if (event.Cuisine !== '') {
    fieldValues.set('Cuisine', event.Cuisine);
  }

  // console.log(event);

  // let fieldValues = event.fieldValues ? event.fieldValues : []; // a map with key = field of a table and value = the value to be filtered with 
  // const fieldValues = new Map([
  //                               // ['Experience', '12'], 
  //                               ['Rating', '3'],
  //                               // ['Cuisine', [{ "S" : 'North-Indian'}]], 
  //                               ['Cuisine', 'North-Indian'],
  //                               ['Price', ['0','21']],
  //                               // ,

  //                               ['Date', "11/23/2020"],
  //                               ['Slots', ['Lunch','Dinner']]
  //                         ]);


  const fields = Array.from(fieldValues.keys());

  var params = {};

  //set params based on the fields set in the filter pane  
  //price , rating : mandatory for every search  

  if (fields.length == 6 && fields.includes('Price', 'Rating', 'Experience', 'Cuisine', 'Slots', 'Date')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'Experience >= :Experience and Rating >= :Rating and contains(Cuisine, :Cuisine) and NOT(ChefSlots.#date IN (:slot)) and Price between :minPrice and :maxPrice',
      ExpressionAttributeNames: {
        '#date': fieldValues.get('Date')
      },
      ExpressionAttributeValues: {
        ':Experience': { 'N': fieldValues.get('Experience') },
        ':Cuisine': { 'S': fieldValues.get('Cuisine') },
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] },
        ':slot': { 'SS': fieldValues.get('Slots') }
      }
    };
  }
  else if (fields.length == 5 && fields.includes('Price', 'Rating', 'Cuisine', 'Slots', 'Date')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'Rating >= :Rating and contains(Cuisine, :Cuisine) and NOT(ChefSlots.#date IN (:slot)) and Price between :minPrice and :maxPrice',
      ExpressionAttributeNames: {
        '#date': fieldValues.get('Date')
      },
      ExpressionAttributeValues: {
        ':Cuisine': { 'S': fieldValues.get('Cuisine') },
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] },
        ':slot': { 'SS': fieldValues.get('Slots') }
      }
    };
  }
  else if (fields.length == 5 && fields.includes('Price', 'Rating', 'Experience', 'Slots', 'Date')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'Rating >= :Rating and Experience = "Experience and NOT(ChefSlots.#date IN (:slot)) and Price between :minPrice and :maxPrice',
      ExpressionAttributeNames: {
        '#date': fieldValues.get('Date')
      },
      ExpressionAttributeValues: {
        ':Experience': { 'S': fieldValues.get('Experience') },
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] },
        ':slot': { 'SS': fieldValues.get('Slots') }
      }
    };
  }
  else if (fields.length == 4 && fields.includes('Price', 'Rating', 'Experience', 'Cuisine')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'Experience >= :Experience and Rating >= :Rating and contains(Cuisine, :Cuisine) and Price between :minPrice and :maxPrice',
      ExpressionAttributeValues: {
        ':Experience': { 'N': fieldValues.get('Experience') },
        ':Cuisine': { 'S': fieldValues.get('Cuisine') },
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] }
      }
    };
  }
  else if (fields.length == 4 && fields.includes('Price', 'Rating', 'Date', 'Slots')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'Rating >= :Rating and NOT(ChefSlots.#date IN (:slot)) and Price between :minPrice and :maxPrice',
      ExpressionAttributeNames: {
        '#date': fieldValues.get('Date')
      },
      ExpressionAttributeValues: {
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] },
        ':slot': { 'SS': fieldValues.get('Slots') }
      }
    };
  }
  else if (fields.length == 3 && fields.includes('Experience')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'Experience >= :Experience and Rating >= :Rating and Price between :minPrice and :maxPrice',
      ExpressionAttributeValues: {
        ':Experience': { 'N': fieldValues.get('Experience') },
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] }
      }
    };
  }
  else if (fields.length == 3 && fields.includes('Cuisine')) {
    params = {
      TableName: 'ChefTable',
      FilterExpression: 'contains(Cuisine, :Cuisine) and Rating >= :Rating and Price between :minPrice and :maxPrice',
      ExpressionAttributeValues: {
        ':Cuisine': { 'N': fieldValues.get('Cuisine') },
        ':Rating': { 'N': fieldValues.get('Rating') },
        ':minPrice': { 'N': fieldValues.get('Price')[0] },
        ':maxPrice': { 'N': fieldValues.get('Price')[1] }
      }
    };
  }


  ddb.scan(params, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};