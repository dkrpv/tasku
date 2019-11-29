import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Main from './pages/main';
import CreateTask from './pages/createTask';

const App = () => {
  const [page, setPage] = useState('main')
  return (
    <div className="App">
    <Navbar bg="success" variant="dark">
      <Navbar.Brand onClick={() => setPage('main')}>Replace</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link onClick={() => setPage('main')}>Home</Nav.Link>
      <Nav.Link href="#features">Profile</Nav.Link>
      <Nav.Link href="#pricing">My Tasks</Nav.Link>
      </Nav>
    </Navbar>
    {page === 'main' && <Main setPage={setPage} />}
    {page === 'createTask' && <CreateTask setPage={setPage} />}

    </div>
  );
}

export default App;
