import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Main from './pages/main';
import CreateTask from './pages/createTask';
import Profile from './pages/profile';
import DoTask from './pages/doTask';
import MyTask from './pages/myTask';
import MapPage from './pages/mapPage';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import JobSelect from './pages/jobSelect'
import Helmet from 'react-helmet';
import Terms from './pages/termsheet'
import Tasks from './pages/tasks'
import ResetPassword from './pages/resetPassword'
import Map from './pages/mapPage'
import Contact from './pages/contact'
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';


import 'bootstrap/dist/css/bootstrap.min.css';

//* Material UI Avatar
import Avatar from '@material-ui/core/Avatar';

const App = () => {
  const [page, setPage] = useState('main');

  var usrName = ""
  if (firebase.auth().currentUser !== null) {
    usrName = firebase.auth().currentUser.displayName;
  }
  else {
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
    <div className="App">
    <Helmet bodyAttributes={{style: 'background-color : #131421'}}/>
    <Navbar bg="light" variant="light">
      <Navbar.Brand onClick={() => setPage('main')}><b>TaskU</b></Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link className="grad" onClick={() => setPage('main')}><b>Home</b></Nav.Link>
      <Nav.Link onClick={() => setPage('profile')}>Profile</Nav.Link>
      <Nav.Link onClick={() => setPage('myTask')}>My Tasks</Nav.Link>
      <Nav.Link onClick={() => setPage('mapPage')}>Map</Nav.Link>
      <Nav.Link onClick={() => setPage('contact')}>Contact Us</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
      <Button variant="dark" onClick={() => setPage('signUp')}>{ signUp }</Button>
      <Nav.Link className="profileNavLink" onClick={() => setPage('profile')}>{ usrName }</Nav.Link>
      <Avatar>{ firstLetter }</Avatar>
      </Nav>
    </Navbar>
    {page === 'main' && <Main setPage={setPage} />}
    {page === 'createTask' && <CreateTask setPage={setPage} />}
    {page === 'profile' && <Profile setPage={setPage} />}
    {page === 'doTask' && <DoTask setPage={setPage} />}
    {page === 'myTask' && <MyTask setPage={setPage} />}
    {page === 'mapPage' && <MapPage setPage={setPage} />}
    {page === 'signIn' && <SignIn setPage={setPage} />}
    {page === 'signUp' && <SignUp setPage={setPage} />}
    {page === 'jobSelect' && <JobSelect setPage={setPage} />}
    {page === 'termsheet' && <Terms setPage={setPage} />}
    {page === 'tasks' && <Tasks setPage={setPage} />}
    {page === 'resetPassword' && <ResetPassword setPage={setPage} />}
    {page === 'mapPage' && <Map setPage={setPage} />}
    {page === 'contact' && <Contact setPage={setPage} />}
    </div>
  );
}

export default App;
