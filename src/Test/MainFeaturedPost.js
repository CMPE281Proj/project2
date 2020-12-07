import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    // display: 'flex',
    // backgroundColor: theme.palette.grey[800],
    // color: "#ffffff",
    marginBottom: theme.spacing(12),
    backgroundImage: 'http://d1q6lc2rasmdf5.cloudfront.net/OtherPictures/background1.jpg',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: 50,

    // backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    // display: 'flex',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 390,
      // paddingLeft: 250
    },
  },
}));

const MainFeaturedPost = (props) => {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      <div />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="#ffffff" paragraph >
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="/findchef">
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
export default MainFeaturedPost;