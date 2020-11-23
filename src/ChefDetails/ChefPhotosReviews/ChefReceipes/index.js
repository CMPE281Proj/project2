import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles((theme) => ({
  chefReceipes: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  chefReceipesGridList: {
    width: 700,
    height: 400,
  },
  receipes: {
    display: 'flex',
    fontSize: '1.2em',
    color: '#444',
    textAlign: 'left',
    padding: '0'
  },
  receipesText: {
    margin: '-10px 0 0 10px'
  }
}));

export const ChefReceipes = () => {
  const classes = useStyles();

  const tileData = [
    {
      img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',
      title: 'Paneer Masala',
    },
    {
      img: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      title: 'Gajar Halwa',
    },
    {
      img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      title: 'Chicken Biryani',
    },
    {
      img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      title: 'Roti Sabzi',
    },
    {
      img: 'https://images.unsplash.com/photo-1591031107640-45556bbac5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80',
      title: 'Sev Puri',
    },
    {
      img: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80',
      title: 'Samosa',
    }
  ]

  return (
    <div className={classes.chefReceipes}>
      <GridList cellHeight={180} className={classes.chefReceipesGridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.receipes}>
            <AddAPhotoIcon />
            <span className={classes.receipesText}>Photos</span>
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
