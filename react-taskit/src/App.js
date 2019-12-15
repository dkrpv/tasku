import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Main from './pages/main';
import CreateTask from './pages/createTask';
import Profile from './pages/profile';
import DoTask from './pages/doTask';
import MyTask from './pages/myTask';
import MapPage from './pages/mapPage';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import JobSelect from './pages/jobSelect'


import 'bootstrap/dist/css/bootstrap.min.css';

//* Material UI Avatar
import Avatar from './pages/avatar'

//* Function for handling local storage
import {useLocalState} from './pages/hooks'

const App = () => {
  const [page, setPage] = useState('main');
  const [userName, setUserName] = useLocalState('userName');
  const [userPhoto, setUserPhoto] = useLocalState('userPhoto');
  var signIn = "Sign In";
  var signUp = "Sign Up";
  if (userName) {
    signIn = "";
    signUp = "Sign Out";
  }

  return (
    <div className="App">
    <Navbar bg="success" variant="dark">
      <Navbar.Brand onClick={() => setPage('main')}>TaskIt</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link onClick={() => setPage('main')}>Home</Nav.Link>
      <Nav.Link onClick={() => setPage('profile')}>Profile</Nav.Link>
      <Nav.Link onClick={() => setPage('myTask')}>My Tasks</Nav.Link>
      <Nav.Link onClick={() => setPage('mapPage')}>Map</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
  <Nav.Link onClick={() => setPage('signIn')}>{ signIn }</Nav.Link>
  <Nav.Link onClick={() => setPage('signUp')}>{ signUp }</Nav.Link>
      <Nav.Link onClick={() => setPage('profile')}>{userName}</Nav.Link>
      <Avatar source={userPhoto}></Avatar>
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
    </div>
  );
}

export default App;
