import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import '.././App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import FacebookLogin from 'react-facebook-login';
import { FacebookLoginButton } from "react-social-login-buttons";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div>
      <Button variant="contained" color="primary" className="filledButton" onClick={handleClickOpen}>
        Join Tasku
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <center>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}  className="Poppins">
          Join Tasku
        </DialogTitle>
        </center>
        <DialogContent>
        <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Enter your email"
            inputProps={{ 'aria-label': 'enter your email' }}
            type="email"
        />
        </Paper>
        <br></br>
        <center>
        <Button variant="contained" color="primary" className="filledButton">Continue</Button>
        </center>
        <br></br>
        <div class="separator">OR</div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        /> 
        <center>
          <p>By joining I agree to receive emails from Tasku.</p>
        </center>
        <hr />
        <center>
          <span>Already a member? </span>
          <span className="green">Sign In</span>
        </center>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { CustomizedDialogs }