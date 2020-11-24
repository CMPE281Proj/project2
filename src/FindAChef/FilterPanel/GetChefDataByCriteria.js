import axios from "axios";

const fieldValues = new Map([
  // ['Experience', '12'], 
  ['Rating', '3'],
  // ['Cuisine', [{ "S" : 'North-Indian'}]], 
  ['Cuisine', 'North-Indian'],
  ['Price', ['0', '21']],
  // ,

  ['Date', "11/23/2020"],
  ['Slots', ['Lunch', 'Dinner']]
]);

const GetChefDataByCriteria = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://79p73jdiu0.execute-api.us-east-1.amazonaws.com/dev/chefdata", { params: fieldValues })
      .then(function (response) {
        const filteredChefData = [];
        if (response.data.length > 0) {
          response.data.forEach(function(element) {
            filteredChefData.push({
              Email: element.Email.S,
              ChefSlots: element.ChefSlots ? element.ChefSlots.M : null,
              Cuisine: element.Cuisine.L,
              Experience: element.Experience.N,
              Location: element.Location.S,
              Name: element.Name ? element.Name.S : '',
              Price: element.Price.N,
              Rating: element.Rating.N,
              Zipcode: element.Zipcode.N.ChefSlots,
              Image: 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/'+ element.Email.S + '.jpg'
            });
          });
          console.log("response.................x", response);
          resolve({filteredChefData});
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
}
export default GetChefDataByCriteria;