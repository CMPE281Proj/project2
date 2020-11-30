import axios from "axios";

const GetDefaultChefData = (event) => {
  return new Promise((resolve, reject) => {
    axios.get("https://7w0xdfcdpl.execute-api.us-east-1.amazonaws.com/getDefaultChefData")
      .then(function (response) {
        const defaultChefData = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
            defaultChefData.push({
              Email: element.Email.S,
              ChefSlots: element.ChefSlots ? element.ChefSlots.M : null,
              Cuisine: element.Cuisine.L,
              Experience: element.Experience.N,
              Location: element.Location.S,
              Name: element.Name ? element.Name.S : '',
              Price: element.Price.N,
              Rating: element.Rating.N,
              Zipcode: element.Zipcode.N,
              Image: 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/ChefProfilePics/' + element.Email.S + '.jpg'
            });
          });
          resolve({ defaultChefData });
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default GetDefaultChefData;