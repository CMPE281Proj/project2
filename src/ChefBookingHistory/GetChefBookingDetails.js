import axios from "axios";

const GetChefBookingDetails = (event) => {
  return new Promise((resolve, reject) => {
    axios.get("https://975mghjsk5.execute-api.us-east-1.amazonaws.com/dev/getchefbookings?chefEmail=" + event)
      .then(function (response) {
        const bookingInfo = [];
        if (response.data.length > 0) {
          response.data.forEach(function (element) {
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
              PaymentStatus: element.PaymentStatus ? element.PaymentStatus.S : 'Confirmed',
              OrderStatus: element.OrderStatus ? element.OrderStatus.S : 'Confirmed',
              Image: element.ChefEmail ? 'http://d1q6lc2rasmdf5.cloudfront.net/ChefPictures/ChefProfilePics/' + element.ChefEmail.S + '.jpg' : 'https://d1q6lc2rasmdf5.cloudfront.net/CustomerPictures/ProfilePicture.jpg'
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

export default GetChefBookingDetails;