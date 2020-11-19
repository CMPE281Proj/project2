import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  chefList: {
      marginBottom: "30px"
  },
  chefImage: {
      maxWidth: 200,
  },
  chefContent: {
      textAlign: "left",
  },
  chefName: {
      fontSize: "1.3em",
      margin: "10px 0 0 0",
      color: "#e59161c2"
  },
  chefLocation: {
      fontSize: "0.9em",
      fontWeight: "600"
  },
  chefReviews: {
      fontSize: "0.9em",
      border: "2px solid #e59161c2",
      padding: "5px",
      borderRadius: "5px"
  },
  chefRating: {
      margin: '5px 10px'
  },
  reviewRating: {
      display: "flex"
  },
  locationPrice: {
      display: "flex",
      justifyContent: "space-between"
  },
  chefPrice: {
      color: "#3e51b5",
      fontSize: "1.2em",
      fontWeight: "bold",
      display: "block",
      textAlign: "center"
  },
  chefPriceHourText: {
      display: "block",
      color: "gray",
      fontSize: "0.9em"
  }
});