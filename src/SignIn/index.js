
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { useHistory, useLocation } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ChefDetailsAPI from '../ChefDetails/ChefDetailsAPI';


Amplify.configure(awsconfig)

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const SignIn = (props) => {
  const classes = useStyles();
  const [emailid, setEmailid] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isChef, setIsChef] = React.useState(false);
  const location = useLocation();

  const [chefDetails, setChefDetails] = React.useState([]);

  // const handleChange = (event) => {
  //   setIsChef(event.target.checked);
  // };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(emailid, password);
      console.log(user);
      sessionStorage.setItem("userDetails", JSON.stringify({ userEmailId: emailid, ischef: isChef }));
      props.onIsLoggedIn(true);

      if (isChef) {
        // props.chefDetails()
        const chefId = emailid;
        history.push("/chefProfile/" + chefId);
      }
      else if (sessionStorage.getItem("chefDetails")) {
        history.push("bookChef/");
      }
      else {
        history.push("custProfile/");
      }

    } catch (error) {
      setErrorMessage(error.message);

      console.log(errorMessage);
      setOpen(true);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container component='main' className={classes.signIn}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='error'>
            {errorMessage}
          </Alert>
        </Snackbar>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e, emailid) => setEmailid(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              onChange={(e, password) => setPassword(e.target.value)}
            />
            <FormControlLabel
              value="Chef"
              control={<Checkbox color="primary" />}
              label="Chef"
              labelPlacement="end"
              onChange={(e) => setIsChef(e.target.checked)}
            />
            {/* <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            /> */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href='/signUp' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default SignIn;
