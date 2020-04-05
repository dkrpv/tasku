import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Main from './pages/main';
import CreateTask from './pages/createTask';
import Profile from './pages/profile';
import DoTask from './pages/doTask';
import MyTask from './pages/myTask';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import JobSelect from './pages/jobSelect'
import Helmet from 'react-helmet';
import Terms from './pages/termsheet'
import Tasks from './pages/tasks'
import ResetPassword from './pages/resetPassword'
import MapPage from './pages/maps'
import Contact from './pages/contact'
import errorPage from './pages/error'
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';

//* Material UI Avatar
import Avatar from '@material-ui/core/Avatar';

const App = () => {
        const [page, setPage] = useState('main');

        var usrName = ""
        if (firebase.auth().currentUser !== null) {
            usrName = firebase.auth().currentUser.displayName;
        } else {
            usrName = ""
        }
        var signIn = "Sign In";
        var signUp = "Join TaskU";
        if (usrName !== "") {
            signIn = "";
            signUp = "Sign Out";
            var firstLetter = usrName.charAt(0);
        }

  return (
    <Router>
    <div className="App">
    <Helmet bodyAttributes={{style: 'background-color: #131421'}}/>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/"><b>TaskU</b></Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link className="grad" href="/"><b>Home</b></Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/mytasks">My Tasks</Nav.Link>
      <Nav.Link href="/map">Map</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
      <Button variant="dark" href="/signup">{ signUp }</Button>
      <Nav.Link href="/profile">{ usrName }</Nav.Link>
      <Avatar>{ firstLetter }</Avatar>
      </Nav>
    </Navbar>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/createtask" component={CreateTask} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dotask" component={DoTask} />
        <Route exact path="/mytasks" component={MyTask} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/jobs" component={JobSelect} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/contact" component={Contact} />
        <Route path='*' exact={true} component={errorPage} />
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;