import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    chefDetails: {
        padding: '30px 0'
    },
    chefProfilePicture: {
        borderRadius: '180px'
    },
    chefProfileInfo: {
        textAlign: 'left'
    },
    chefProfileInfoReviewCount: {
        display: 'inline-block',
        verticalAlign: 'super',
        marginLeft: '5px',
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'gray'
    },
    chefProfileInfoButtons: {
        marginTop: '10px',
        display: 'flex'
    },
    chefProfileFav: {
        color: '#e59161c2',
        fontWeight: 'bold',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginRight: '20px',
        marginTop: '10px',
    },
    chefProfileAddress: {
        margin: '5px 0'
    }
});