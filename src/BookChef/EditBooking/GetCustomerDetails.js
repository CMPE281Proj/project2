import axios from "axios";

export const GetCustomerDetails = (event) => {
    return new Promise((resolve, reject) => {
        axios.get("https://qcnp72cz2g.execute-api.us-east-1.amazonaws.com/dev/getcustomerdetails?Email=" + event)
      .then(function (response) {
        if (response.data !== null) {
          const custDetails = response.data;
          custDetails.Image = 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/ChefProfilePics/'+ custDetails.Email + '.jpg';
          resolve(custDetails);
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default GetCustomerDetails;