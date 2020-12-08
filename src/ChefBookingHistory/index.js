import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
// import UpdateRatingReview from './UpdateRatingReview';
import CancelIcon from '@material-ui/icons/Cancel';
import DialogContentText from '@material-ui/core/DialogContentText';
import StarRateIcon from '@material-ui/icons/StarRate';
import GetChefBookingDetails from './GetChefBookingDetails';
import '../CustomerProfile/style.css';
// import UpdateBookingOrder from './UpdateBookingOrder';

const ChefBookingHistory = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openCancelDialog, setopenCancelDialog] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [id, setId] = React.useState(0);
  const [emailid, setEmailid] = React.useState(JSON.parse(sessionStorage.getItem('userDetails')).userEmailId);

  const handleClickOpen = (bookingId) => {
    setOpen(true);
    setId(bookingId);
  };

  const handleClose = () => {
    setOpen(false);
    setopenCancelDialog(false);
  };

  const columns = [
    {
      field: 'BookingId',
      headerName: 'Booking Id',
      width: 140,
    },
    { field: 'CustName', headerName: 'Customer Name', width: 180 },
    // { field: 'ChefEmail', headerName: 'Chef Email', width: 180 },
    { field: 'Date', headerName: 'Date', width: 180 },

    { field: 'Slot', headerName: 'Slot', width: 180 },

    {
      field: 'NumberOfHoursBooked',
      headerName: 'Hours',
      width: 80,
    },
    { field: 'TotalPrice', headerName: 'Total Price', width: 100 },
    { field: 'PaymentStatus', headerName: 'Payment Status', width: 150 },
    { field: 'OrderStatus', headerName: 'Order Status', width: 150 },
    // {
    //   field: 'NumberOfHoursBooked',
    //   headerName: 'Review/Rate',
    //   width: 150,
    //   renderCell: (params) => (
    //     <Button color="primary" size="small" onClick={() => handleClickOpen(params.getValue("BookingId"))}>
    //       <StarRateIcon />
    //     </Button>
    //   ),
    // },
    // {
    //   field: 'Cancel',
    //   headerName: 'Cancel',
    //   width: 150,
    //   renderCell: (params) => (
    //     <Button color='secondary' size="small" onClick={() => handleCancel(params.getValue("BookingId"))}>
    //       <CancelIcon />
    //     </Button>
    //   ),
    // },
  ];

  const [bookingDetails, setBookingDetails] = React.useState([]);

  useEffect(() => {
    // console.log('chef id ' + props.chefId);
    if (emailid) {
      GetChefBookingDetails(emailid).then(function (response) {
        console.log("GET CHEF BOOKING DETAILS", response.bookingInfo);
        setBookingDetails(response);
      })
        .catch(function (error) {
          console.log('GET CHEF BOOKING DETAILS', error);
          setBookingDetails([]);
        });
    }
  }, [emailid]);

  // const onSubmitRatings = () => {
  //   const query = {};
  //   query.id = Number(id);
  //   query.rating = Number(rating);
  //   query.review = review;
  //   UpdateRatingReview(query).then(function (response) {
  //     console.log("UpdateRatingReview", response.bookingInfo);
  //     setOpen(false);
  //   })
  //     .catch(function (error) {
  //       console.log('UpdateRatingReview error', error);
  //     });
  // }

  // const handleCancel = (bookingId) => {
  //   setId(bookingId);
  //   setopenCancelDialog(true);
  // };

  // const updateOrderStatus = () => {
  //   const q1 = {};
  //   q1.id = Number(id);
  //   UpdateBookingOrder(q1).then(function (response) {
  //     console.log('Cancellation successful', response.bookingInfo);
  //     setopenCancelDialog(false);
  //   })
  //     .catch(function (error) {
  //       console.log('cancellation error', error);
  //     });
  // }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={bookingDetails} columns={columns} pageSize={5} />

      <div>
        {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
        </Dialog> */}
      </div>
      <div>
        <Dialog
          open={openCancelDialog}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{`Are you sure you want to cancel the reservation, ${id} ?`}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This will cancel the reservation.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              No
            </Button>
            {/* <Button onClick={updateOrderStatus} color="primary" autoFocus>
              Yes
            </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default ChefBookingHistory;
