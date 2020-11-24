import axios from "axios";

const GetChefPortfolioPictures = (event) => {
    return new Promise((resolve, reject) => {
        axios.put('https://3arwhs3sja.execute-api.us-east-1.amazonaws.com/getChefPortfolioPictures', {Email: event.Email})
      .then(function (response) {
        const imageList = [];
        if (response.data.Contents.length > 0) {
          response.data.Contents.forEach(function(element) {
            const fileName = /[^/]*$/.exec(element.Key)[0];
            if (fileName !== '') {
              imageList.push(
                {
                  img: 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/chefPortfolioPictures/'+ event.Email + '/' + fileName,
                  title: fileName
                }
              )
            }
          });
          resolve({imageList});
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
}
export default GetChefPortfolioPictures;