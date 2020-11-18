import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    filterpanel: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
        color: '#000'
    },
    selectBoxInput: {
        width: '100%',
        color: '#7c7979',
        textAlign: 'left',
        fontSize: '1.2em'
    },
    formControl: {
        margin: '30px 0 0 0',
        width: '100%',
        textAlign: 'left'
    },
    sliderWrap: {
        width: '100%'
    },
    labelStyle: {
        color: '#7c7979',
        fontSize: '1.07em',
        display: 'block',
        margin: '30px 0 10px 0',
        textAlign: 'left'
    },
    buttonWrap: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    }
}));