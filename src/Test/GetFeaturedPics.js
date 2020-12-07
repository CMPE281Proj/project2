// https://wehrtwaz50.execute-api.us-east-1.amazonaws.com/dev/getfeaturedpictures

import axios from "axios";

const GetChefPortfolioPictures = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://wehrtwaz50.execute-api.us-east-1.amazonaws.com/dev/getfeaturedpictures')
      .then(function (response) {
        const imageList = [];
        if (response.data.Contents.length > 0) {
          response.data.Contents.forEach(function (element) {
            const fileName = /[^/]*$/.exec(element.Key)[0];
            if (fileName !== '') {
              imageList.push(
                {
                  img: 'http://d1q6lc2rasmdf5.cloudfront.net/OtherPictures/' + fileName
                  // title: fileName.split('.').slice(0, -1).join('.')
                }
              )
            }
          });
          resolve({ imageList });
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
export default GetChefPortfolioPictures;