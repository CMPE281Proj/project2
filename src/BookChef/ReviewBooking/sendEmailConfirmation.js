import axios from 'axios';

const sendEmailConfirmation = (event) => {
  return new Promise((resolve, reject) => {
    axios.put('https://31wtkdl8uc.execute-api.us-east-1.amazonaws.com/dev', event
    )
      .then(function (response) {
        resolve(true);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default sendEmailConfirmation;