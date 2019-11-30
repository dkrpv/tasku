import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Main from './pages/main';
import CreateTask from './pages/createTask';
import Profile from './pages/profile';
import DoTask from './pages/doTask';
import MyTask from './pages/myTask';

const App = () => {
  const [page, setPage] = useState('main')
  return (
    <div className="App">
    <Navbar bg="success" variant="dark">
      <Navbar.Brand onClick={() => setPage('main')}>Replace</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link onClick={() => setPage('main')}>Home</Nav.Link>
      <Nav.Link onClick={() => setPage('profile')}>Profile</Nav.Link>
      <Nav.Link onClick={() => setPage('myTask')}>My Tasks</Nav.Link>
      </Nav>
    </Navbar>
    {page === 'main' && <Main setPage={setPage} />}
    {page === 'createTask' && <CreateTask setPage={setPage} />}
    {page === 'profile' && <Profile setPage={setPage} />}
    {page === 'doTask' && <DoTask setPage={setPage} />}
    {page === 'myTask' && <MyTask setPage={setPage} />}

    </div>
  );
}

export default App;
