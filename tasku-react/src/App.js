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
          <Typography variant="h6" className={classes.title}>
            <b>Tasku</b>
          </Typography>
          <Button variant="contained">Join Tasku</Button>
        </Toolbar>
      </AppBar>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
    </div>
    </Router>
  );
}


export default App;
