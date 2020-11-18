import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { FilterPanel } from './FilterPanel';

export const FindAChef = () => {
    const useStyles = makeStyles((theme) => ({
        search: {
          flexGrow: 1,
          marginTop: theme.spacing(2),
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    return (
        <Container maxWidth={false} className={classes.search}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <FilterPanel />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
