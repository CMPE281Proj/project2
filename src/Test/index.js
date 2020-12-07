import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import GetFeaturedPics from './GetFeaturedPics';
import Main from './Main';
import Sidebar from './Sidebar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(4),
  },
  pictures: {
    // display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 1500,
  },
  // icon: {
  //   color: 'rgba(255, 255, 255, 0.54)',
  // },
}));

const sections = [
  { title: 'North-Indian', url: '#' },
  { title: 'Manipuri', url: '#' },
  { title: 'Rajasthani', url: '#' },
  { title: 'South-Indian', url: '#' },
  { title: 'Bengali', url: '#' },
  { title: 'Maharastrian', url: '#' },
  { title: 'Andhra', url: '#' },
];

const mainFeaturedPost = {
  title: 'Home Food!!',
  description:
    "Your favorite food from your favorite Chefs in your KITCHEN!",
  image: 'http://d1q6lc2rasmdf5.cloudfront.net/OtherPictures/background1.jpg',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Want to join us ?',
    // date: 'Nov 12',
    description:
      'Spread the happiness with your delicious food!',
    image: 'http://d1q6lc2rasmdf5.cloudfront.net/pics/3.jpg',
    imageText: 'Image Text',
    linkText: '/applyJob',
    linkVal: 'Apply Now!'
  },
  {
    title: 'Spice up the kitchen !',
    // date: 'Nov 11',
    description:
      'Find your Chef now !!',
    image: 'http://d1q6lc2rasmdf5.cloudfront.net/pics/chefPic.jpg',
    imageText: 'Image Text',
    linkText: '/findchef',
    linkVal: 'Find Chef!'
  },
];

// const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Get your favourite dish done by professional chefs in your kitchen!. Enjoy Home Food !',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

const Test = () => {
  const classes = useStyles();
  const [imageList, setImageList] = React.useState([]);

  useEffect(() => {
    GetFeaturedPics().then(function (response) {
      setImageList(response.imageList);
      console.log('get featured pics', response);
    })
      .catch(function (error) {
        setImageList([]);
        console.log('get featured pics error', error);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From our customers" />
            <GridList cellHeight={180} className={classes.gridList} cols={4}>
              <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
              </GridListTile>
              {imageList.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  {/* <GridListTileBar
                    title={tile.title}
                  /> */}
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </main>
      </Container >
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment >
  );
}
export default Test;
