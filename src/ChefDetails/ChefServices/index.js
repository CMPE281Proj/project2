import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './style.css';

const useStyles = makeStyles((theme) => ({
  chefServices: {
    padding: '20px'
  },
  chefServiceH3: {
    fontSize: '1.2em',
    color: '#444',
    textAlign: 'left',
    padding: '0',
    margin: '0 0 10px'
  },
  serviceKey: {
    textAlign: 'left',
    fontSize: '1.1em'
  },
  serviceValuePrice: {
    textAlign: 'right',
    fontSize: '1.1em',
    fontWeight: 'bold'
  },
  serviceValue: {
    textAlign: 'left',
    fontSize: '1.1em',
  }
}));

export const ChefServices = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.chefServices}>
        <h3 className={classes.chefServiceH3}>Services</h3>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} className={classes.serviceKey}>
            Price
          </Grid>
          <Grid item xs={12} sm={6} className={classes.serviceValuePrice}>
            $25
          </Grid>
          <Grid item xs={12} sm={4} className={classes.serviceKey}>
            Cuisines
          </Grid>
          <Grid item xs={12} sm={8} className={classes.serviceValue}>
            North Indian, South Indian, Maharashtrian
          </Grid>
        </Grid>
      </Card>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'B', date: '2020-11-23' },
          { title: 'L', date: '2020-11-23' },
          { title: 'D', date: '2020-11-23' },
          { title: 'D', date: '2020-11-24' }
        ]}
      />
    </div>
  );
}