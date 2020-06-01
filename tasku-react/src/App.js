import React from 'react';
import Main from './pages/main';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#0000",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
      <AppBar style={{ background: '#ffffff' }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Tasku</Button>
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
