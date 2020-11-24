import axios from "axios";

export const ChefDetailsAPI = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://bzvv8cpxd0.execute-api.us-east-1.amazonaws.com/dev/cheftableapi?Email=" + event.Email)
      .then(function (response) {
        if (response.data !== null) {
          const chefDetails = response.data;
          chefDetails.Image = 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/'+ chefDetails.Email + '.jpg';
          resolve(chefDetails);
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default ChefDetailsAPI;