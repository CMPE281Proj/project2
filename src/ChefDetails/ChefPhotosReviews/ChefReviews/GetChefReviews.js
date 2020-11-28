import axios from "axios";

export const GetChefReviews = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://0qg32rvy85.execute-api.us-east-1.amazonaws.com/dev/chefreview?ChefName=" + event.ChefName)
      .then(function (response) {
        if (response.data !== null) {
          const chefReviews = response.data;
          chefReviews.Image = 'http://d1q6lc2rasmdf5.cloudfront.net/CustomerPictures/'+ chefReviews.CustomerEmail + '.jpg';
          resolve(chefReviews);
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default GetChefReviews;