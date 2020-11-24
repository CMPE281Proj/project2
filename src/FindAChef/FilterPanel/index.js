import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

import { useStyles } from './style';
import GetChefDataByCriteria from './GetChefDataByCriteria';

export const FilterPanel = (props) => {
    const classes = useStyles();
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        }
    };
    const cuisinesList = [
        'North Indian',
        'South Indian',
        'Maharashtrian',
        'Rajasthani',
        'Gujarati'
    ];
    const [location, setLocation] = React.useState('');
    const [people, setPeople] = React.useState('');
    const [slot, setSlot] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [cuisine, setCuisine] = React.useState([]);
    const [price, setPriceValue] = React.useState([0, 50]);
    const [rating, setRating] = React.useState(2);
    const [experience, setExperience] = React.useState('');

    const serchClick = () => {
        const filterQuery = {};

        // Add to FilterQuery only if the user specifies a value, else ignore
        if (location !== '') {
            filterQuery.location = location;
        }
        if (selectedDate !== null) {
            filterQuery.date = selectedDate;
        }
        if (people !== '') {
            filterQuery.people = people;
        }
        if (cuisine.length !== 0) {
            filterQuery.cuisine = cuisine;
        }
        if (slot !== '') {
            filterQuery.slot = slot;
        }
        if (price !== null) {
            filterQuery.price = price;
        }
        if (rating !== 0) {
            filterQuery.rating = rating;
        }
        if (experience !== '') {
            filterQuery.experience = experience;
        }

        console.log('filterQuery', filterQuery);

        GetChefDataByCriteria().then(function (response) {
            props.onSearch(response);
            console.log('GetChefDataByCriteria', response);
        })
        .catch(function (error) {
            console.log('GetChefDataByCriteria error', error);
        }); 
    };

    return (
        <Container maxWidth={false} className={classes.filterpanel}>
            {/* Location Input Field */}
            <TextField
                label='Location'
                className={classes.textField}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                InputLabelProps={{
                    style: { color: '#7c7979', fontSize: '1.2em' },
                    shrink: true
                }}
            />

            {/* Date Input Field */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    label='Select Date'
                    value={selectedDate}
                    onChange={(e, date) => setSelectedDate(date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date'
                    }}
                    InputLabelProps={{
                        style: { color: '#7c7979', fontSize: '1.2em' },
                        shrink: true
                    }}
                    style={{ marginTop: '30px', width: '100%' }}
                />
            </MuiPickersUtilsProvider>

            {/* Number of people input field */}
            <TextField
                label='No Of People'
                className={classes.textField}
                value={people}
                onChange={(event) => setPeople(event.target.value)}
                InputLabelProps={{
                    style: { color: '#7c7979', fontSize: '1.2em' },
                    shrink: true
                }}
                style={{ marginTop: '30px' }}
            />

            {/* Cuisine Input Field */}
            <FormControl className={classes.formControl}>
                <InputLabel shrink className={classes.selectBoxInput}>
                    Cuisine
        </InputLabel>
                <Select
                    multiple
                    value={cuisine}
                    onChange={(event) => setCuisine(event.target.value)}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {cuisinesList.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={cuisine.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Slot Input Field */}
            <FormControl className={classes.formControl}>
                <InputLabel shrink className={classes.selectBoxInput}>
                    Slot
        </InputLabel>
                <Select value={slot} onChange={(event) => setSlot(event.target.value)}>
                    <MenuItem value='breakfast'>Breakfast</MenuItem>
                    <MenuItem value='lunch'>Lunch</MenuItem>
                    <MenuItem value='dinner'>Dinner</MenuItem>
                </Select>
            </FormControl>

            {/* Price Input Field */}
            <div className={classes.sliderWrap}>
                <span className={classes.labelStyle}>Price Per Hour (In Dollar)</span>
                <Slider
                    value={price}
                    onChange={(e, newValue) => setPriceValue(newValue)}
                    valueLabelDisplay='on'
                    aria-labelledby='range-slider'
                    style={{ marginTop: '30px' }}
                />
            </div>

            {/* Ratings Input Field */}
            <div>
                <span className={classes.labelStyle}>Ratings</span>
                <Rating
                    name='simple-controlled'
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    size='large'
                />
            </div>

            {/* Experience Input Field */}
            <TextField
                label='Experience'
                className={classes.textField}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>Months</InputAdornment>
                    )
                }}
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
                InputLabelProps={{
                    style: { color: '#7c7979', fontSize: '1.2em' },
                    shrink: true
                }}
                style={{ marginTop: '30px' }}
            />

            {/* Search Button */}
            <div className={classes.buttonWrap}>
                <Button variant='contained' color='primary' onClick={serchClick}>
                    Search
        </Button>
            </div>
        </Container>
    );
};
