import axios from "axios";

const PutCustomerBookings = (event) => {
  return new Promise((resolve, reject) => {
    axios.put("https://uwveaj59jf.execute-api.us-east-1.amazonaws.com/dev/customerbookings", event
      )
      .then(function (response) {
          resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default PutCustomerBookings;