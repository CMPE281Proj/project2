import axios from "axios";

const GetChefDataByCriteria = (event) => {
  return new Promise((resolve, reject) => {
    axios.put("https://8pw4ve3xvb.execute-api.us-east-1.amazonaws.com/dev",
      {
        // fieldValues,
        Rating: '3', //change to Rating : event.target.Rating or pass values to the function and use the same.
        Cuisine: 'North-Indian',
        Price: ['0', '21'],
        Date: '11/23/2020',
        Slots: ['Lunch', 'Dinner'],
        Experience: ''
      })
      .then(function (response) {
        const filteredChefData = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
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
              Image: 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/' + element.Email.S + '.jpg'
            });
          });
          console.log("response.................x", response);
          resolve({ filteredChefData });
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default GetChefDataByCriteria;