import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import GetCustomerDetails from './GetCustomerDetails';

import '../style.css';

const EditHistory = (props) => {
  const [slot, setSlot] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [NumOfHours, setNumOfHours] = React.useState(props.bookingInfo.hours ? props.bookingInfo.hours : '');
  const [chefDetails, setChefDetails] = React.useState({});
  const [slotList] = React.useState(['Breakfast', 'Lunch', 'Dinner']);
  const [custName, setCustName] = React.useState('');
  const [custEmail, setCustEmail] = React.useState('');

  useEffect(() => {
    var chefSessionDetails = JSON.parse(sessionStorage.getItem("chefDetails"));
    var userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    setChefDetails(chefSessionDetails);

    GetCustomerDetails(userDetails.userEmailId).then(function (response) {
      setCustName(response.Name);
      setCustEmail(userDetails.userEmailId);
    })
      .catch(function (error) {
        console.log('GetCustomerDetails error', error);
      });
  }, []);

  const onSlotchange = (slot) => {
    setSlot(slot);
    if (selectedDate in chefDetails.ChefSlots && chefDetails.ChefSlots[selectedDate].includes(slot)) {
      alert('Slot not Available. Please select some other Slot');
    } else {
      handleSave(slot);
    }
  }

  const handleSave = (slot) => {
    if (selectedDate in chefDetails.ChefSlots) {
      chefDetails.ChefSlots[selectedDate].push(slot);
    } else {
      chefDetails.ChefSlots[selectedDate] = [slot];
    }
    console.log("chefDetails.ChefSlots", chefDetails.ChefSlots);
    props.onEditBooking({
      chefName: chefDetails.Name, price: Number(chefDetails.Price), chefEmail: chefDetails.Email,
      hours: Number(NumOfHours), selectedDate, slot, custName, custEmail, updatedChefSlots: chefDetails.ChefSlots
    });
  }

  return (
    <Container maxWidth={"sm"} className="bookingContainer">
      <Typography variant='h6' gutterBottom>
        Edit Booking
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            // required
            id='ChefName'
            name='chefName'
            label='Chef'
            // fullWidth
            // autoComplete='given-name'
            className='text-muted'
            value={chefDetails && chefDetails.Name}
          // get the chef name to this place and delete the input control
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            // required
            id='price'
            name='price'
            label='Price/Hr'
            // autoComplete='given-name'
            className='text-muted'
            value={chefDetails && chefDetails.Price}
          // get the Price/Hr for this chef and add here
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='NumOfHours'
            name='NumOfHours'
            label='No. of Hours'
            value={NumOfHours}
            onChange={(event) => setNumOfHours(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disablePast='false'
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              label='Select Date'
              value={selectedDate}
              onChange={(e, date) => setSelectedDate(date)}
            />
          </MuiPickersUtilsProvider>

        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel>Slot</InputLabel>
            <Select
              value={slot}
              onChange={(event) => onSlotchange(event.target.value)}
            >
              {slotList.map((s, index) => {
                return <MenuItem value={s}>{s}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditHistory;
