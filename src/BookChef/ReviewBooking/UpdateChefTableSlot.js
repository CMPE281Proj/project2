import axios from "axios";

const UpdateChefTableSlot = (event) => {
  return new Promise((resolve, reject) => {
    axios.put("https://5rq1hmmfdd.execute-api.us-east-1.amazonaws.com/dev", event
      )
      .then(function (response) {
          resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default UpdateChefTableSlot;