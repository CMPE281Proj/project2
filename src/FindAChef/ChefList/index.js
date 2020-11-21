import React from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
export const ChefList = () => {

    const classes = useStyles();
    const chefList = [
        {
            chefName: 'Natasha',
            address: 'West San Jose, San Jose',
            price: '25',
            reviews: '20',
            rating: 2,
            image:
                'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        },
        {
            chefName: 'Alex',
            address: 'West San Jose, San Jose',
            price: '20',
            reviews: '30',
            rating: 4,
            image:
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80',
        },
        {
            chefName: 'Rob',
            address: 'West San Jose, San Jose',
            price: '30',
            reviews: '10',
            rating: 1,
            image:
                'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
        },
        {
            chefName: 'Diana',
            address: 'West San Jose, San Jose',
            price: '25',
            reviews: '50',
            rating: 5,
            image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
    ];
    const getpathQuery = (chefId) => {
        const pathQuery = "chefProfile/" + chefId;
        return {
            pathname: pathQuery
        };
    };
    return (
        <Container maxWidth={false}>
            {chefList.map((chef, index) => (
                <Card className={classes.chefList} key={index}>
                    <Grid container spacing={2}>
                        <Grid item className={classes.chefImage}>
                            <CardMedia
                                component='img'
                                alt='Contemplative Reptile'
                                image={chef.image}
                                title='Contemplative Reptile'
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className={classes.chefContent}>
                            <div>
                                <Link to={getpathQuery(chef.chefName)} style={{ textDecoration: 'none', display: 'block', color:"inherit" }}>
                                    <h4 className={classes.chefName}>{chef.chefName}</h4>
                                </Link>
                                <div className={classes.locationPrice}>
                                    <span className={classes.chefLocation}>{chef.address}</span>
                                    <div>
                                        <span className={classes.chefPrice}>${chef.price}</span>
                                        <span className={classes.chefPrice1}>Per Hour</span>
                                    </div>
                                </div>
                                <div className={classes.reviewRating}>
                                    <span className={classes.chefReviews}>
                                        {chef.reviews} Reviews
                  </span>
                                    <Rating
                                        value={chef.rating}
                                        className={classes.chefRating}
                                        name='Chef Rating'
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Container>
    );
};
