import axios from "axios";

export const GetCustomerBookingInfo = (event) => {
    return new Promise((resolve, reject) => {
        axios.get(" https://cgrdadmbi3.execute-api.us-east-1.amazonaws.com/dev/getcustomerbookinginfo?Name=" + event)
      .then(function (response) {
        const bookingInfo = [];
        if (response.data.length > 0) {
          response.data.forEach(function(element) {
            bookingInfo.push({
              id: element.BookingId ? element.BookingId.N : '',
              TotalPrice: element.TotalPrice ? element.TotalPrice.N : 0,
              Date: element.Date ? element.Date.S : null,
              ChefName: element.ChefName ? element.ChefName.S : '',
              BookingId: element.BookingId ? element.BookingId.N : '',
              NumberOfHoursBooked: element.NumberOfHoursBooked ? element.NumberOfHoursBooked.N : "",
              ChefEmail: element.ChefEmail ? element.ChefEmail.S : '',
              Slot: element.Slot ? element.Slot.L[0].S : '',
              CustName: element.CustName ? element.CustName.S : '',
              Image: element.ChefEmail ? 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/ChefProfilePics/'+ element.ChefEmail.S + '.jpg' : ''
            });
          });
          resolve(bookingInfo);
        }
      })
      .catch(function (error) {
        reject(error);
      });
    });
};

export default GetCustomerBookingInfo;