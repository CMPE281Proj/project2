import axios from "axios";

const UpdateRatingReview = (event) => {
  return new Promise((resolve, reject) => {
    axios.put("https://04eemp9x86.execute-api.us-east-1.amazonaws.com/dev/updatecustomerbookingsratingreview", event
      )
      .then(function (response) {
          resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default UpdateRatingReview;