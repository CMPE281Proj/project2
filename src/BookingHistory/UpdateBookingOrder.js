import axios from "axios";

const UpdateBookingOrder = (event) => {
  return new Promise((resolve, reject) => {
    axios.post("https://8n1ftpoa5a.execute-api.us-east-1.amazonaws.com/dev/updatecancelstatus", event
    )
      .then(function (response) {
        resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default UpdateBookingOrder;