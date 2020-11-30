import axios from "axios";

export const GetChefReviews = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://3pb760bj4c.execute-api.us-east-1.amazonaws.com/dev/getchefreviews?Name=" + event)
      .then(function (response) {
        const chefReviews = [];
        if (response.data.length > 0) {
          response.data.forEach(function(element) {
            chefReviews.push({
              Image: element.CustEmail ? 'http://d1q6lc2rasmdf5.cloudfront.net/CustomerPictures/'+ element.CustEmail.S + '.jpg' : "",
              CustName: element.CustName ? element.CustName.S : '',
              Comments: element.Comments ? element.Comments.S : ''
            });
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