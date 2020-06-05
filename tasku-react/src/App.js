import React from 'react';
import Main from './pages/main';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import SignUp from './pages/signUp';
import ModalPage from './pages/modal'
import CustomizedDialogs from './pages/modal'
import Cards from './pages/cards'
import Join from './pages/join'
import Login from './pages/login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
      <Helmet bodyAttributes={{style: 'background-color: #131421'}}/>
      <AppBar style={{ background: '#ffffff' }} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <p className="logo"  alt="text">Tasku</p>
          </Typography>
          <Button>Log In</Button>
          <Button variant="contained" color="primary" className="filledButton" component={ModalPage}></Button>
        </Toolbar>
      </AppBar>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={ModalPage} />
        <Route exact path="/cards" component={Cards} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} />
        <Route path='*' exact={true} component={Main} />
      </Switch>
    </div>
    </div>
    </Router>
  );
}


export default App;
