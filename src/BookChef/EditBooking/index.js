import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container'

const EditHistory = () => {
  const [slot, setSlot] = React.useState('');
  const [date, setSelectedDate] = React.useState(new Date());
  const [people, setPeople] = React.useState('');
  const [NumOfHours, setNumOfHours] = React.useState('');

  return (
    <Container maxWidth={false}>
      <Typography variant='h6' gutterBottom>
        Edit Booking
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            // required
            id='ChefName'
            name='chefName'
            label='Chef'
            // fullWidth
            autoComplete='given-name'
            className='text-muted'
          // get the chef name to this place and delete the input control
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // required
            id='price'
            name='price'
            label='Price/Hr'
            autoComplete='given-name'
            className='text-muted'
          // get the Price/Hr for this chef and add here
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='personCount'
            name='personCount'
            label='No. of People'
            onChange={(e, people) => setPeople(people)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='NumOfHours'
            name='NumOfHours'
            label='No. of Hours'
            onChange={(e, NumOfHours) => setNumOfHours(NumOfHours)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='date'
            type='date'
            defaultValue='2017-05-24'
            onChange={(e, date) => setSelectedDate(date)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <InputLabel>Slot</InputLabel>
            <Select
              value={slot}
              onChange={(event) => setSlot(event.target.value)}
            >
              <MenuItem value='breakfast'>Breakfast</MenuItem>
              <MenuItem value='lunch'>Lunch</MenuItem>
              <MenuItem value='dinner'>Dinner</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditHistory;
