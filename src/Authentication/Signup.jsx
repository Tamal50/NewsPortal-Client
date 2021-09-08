import React, { useState } from 'react';
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
import firebase from 'firebase';
import firebaseConfig from './config';
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
    const [signup, Setsignup] = useState([])
    const classes = useStyles();
    const [user, setUser] = useState({
      email:'',
      password:'',
    })
   console.log(user)
    const handleSignUp = (e) => {
        e.preventDefault()
      firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
      .then((res) =>{
        var user = res.user
         
        Setsignup(user)
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage)
      });
      
    }
  
    const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
    const hasNumber = input => /\d/.test(input);
    const handleOnChange = (e) => {
      const newUserInfo = {
          ...user
        };
      let isValid = true;
      if(e.target.name === 'email'){
          isValid = is_valid_email(e.target.value);
        }
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
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSignUp} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onBlur={handleOnChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                onBlur={handleOnChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}