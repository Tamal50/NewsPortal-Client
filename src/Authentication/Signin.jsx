import React, {useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase'
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';



function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
     const [logInUser, setLogInUser] = useContext(UserContext);
     const [error,setError] = useState("")
     const classes = useStyles();
     const [user, setUser] = useState({
       email:'',
       password:'',
     })
     console.log(user)
   
     const history = useHistory();
   const location = useLocation();
   const { from } =  { from: { pathname: "/" } };
     const [loggedInUser, setLoggedInUser] = useState([]);
     const handleSignIn = (e) => {
       e.preventDefault();
       firebase.auth().signInWithEmailAndPassword(user.email ,user.password)
       .then(res => {
         console.log(res)
           user = res.user;
           console.log(user)
           storeAuthToken();
           setLoggedInUser(user);
         })
         .catch((error) => {
           if (error.message ==="Assignment to constant variable."){
             alert("login successfully")
             history.replace(from);
             return error.message
           }
           var errorMessage = error.message;
           alert(errorMessage)
           setError(errorMessage)
         });
   
   
       const storeAuthToken = () => {
         firebase.auth().currentUser.getIdToken(true)
         .then(function(idToken) {
           console.log("token",idToken)
           sessionStorage.setItem('token', idToken);
           
         })
         .catch(function(error) {
         });
       }
       }
   
      
       const hasNumber = input => /\d/.test(input);
       const handleOnChange = (e) => {
         const newUserInfo = {
             ...user
           };
         let isValid = true;
           if(e.target.name === "password"){
             isValid = e.target.value.length > 8 && hasNumber(e.target.value);
           }
           newUserInfo[e.target.name] = e.target.value;
           newUserInfo.isValid = isValid;
           setUser(newUserInfo);
     }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e)=>handleSignIn(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            onBlur={handleOnChange}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            onBlur={handleOnChange}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}