import axios from "axios";

export const GetChefReviews = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://q3ue4n6lfk.execute-api.us-east-1.amazonaws.com/dev/chefreview?ChefName=" + event)
      .then(function (response) {
        const chefReviews = [];
        if (response.data.length > 0) {
          response.data.forEach(function(element) {
            element.Image = 'http://d1q6lc2rasmdf5.cloudfront.net/CustomerPictures/'+ element.CustomerEmail + '.jpg';
            chefReviews.push(element);
          });
          resolve(chefReviews);
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default GetChefReviews;