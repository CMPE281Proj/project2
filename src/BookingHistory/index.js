import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import GetCustomerBookingInfo from './GetCustomerBookingInfo';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import UpdateRatingReview from './UpdateRatingReview';

import '../CustomerProfile/style.css';

const BookingHistory = (props) => {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [id, setId] = React.useState(0);

  const handleClickOpen = (bookingId) => {
    setOpen(true);
    setId(bookingId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      field: 'BookingId',
      headerName: 'Booking Id',
      width: 140,
    },
    { field: 'ChefName', headerName: 'Chef Name', width: 120 },
    { field: 'ChefEmail', headerName: 'Chef Email', width: 180 },
    { field: 'Date', headerName: 'Date', width: 120 },

    { field: 'Slot', headerName: 'Slot', width: 130 },

    {
      field: 'NumberOfHoursBooked',
      headerName: 'Hours',
      width: 80,
    },
    { field: 'TotalPrice', headerName: 'Total Price', width: 100 },
    { field: 'PaymentStatus', headerName: 'Payment Status', width: 100 },
    {
      field: 'NumberOfHoursBooked',
      headerName: 'Review and Rate',
      width: 150,
      renderCell: (params) => (
        <Button color="primary" variant="contained" size="small" onClick={() => handleClickOpen(params.getValue("BookingId"))}>
          Rate
        </Button>
      ),
    },
  ];

  const [bookingDetails, setBookingDetails] = React.useState([]);

  useEffect(() => {
    if (props.custName) {
      GetCustomerBookingInfo(props.custName).then(function (response) {
        console.log("GetCustomerBookingInfo", response.bookingInfo);
        setBookingDetails(response);
      })
        .catch(function (error) {
          console.log('GetCustomerBookingInfo error', error);
          setBookingDetails([]);
        });
    }
  }, [props.custName]);

  const onSubmitRatings = () => {
    const query = {};
    query.id = Number(id);
    query.rating = Number(rating);
    query.review = review;
    UpdateRatingReview(query).then(function (response) {
      console.log("UpdateRatingReview", response.bookingInfo);
      setOpen(false);
    })
      .catch(function (error) {
        console.log('UpdateRatingReview error', error);
      });
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={bookingDetails} columns={columns} pageSize={5} />

      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Rate Chef</DialogTitle>
          <DialogContent>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              size='large'
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Add Review"
              // type="email"
              value={review}
              fullWidth
              onChange={(e) => setReview(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
              </Button>
            <Button onClick={onSubmitRatings} color="primary" variant="contained">
              Submit
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default BookingHistory;
