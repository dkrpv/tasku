import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import placeholder from './placeholder.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const createTask = ({ setPage }) => (
  <div className="createTask">
  <Navbar bg="success" variant="dark">
    <Navbar.Brand onClick={() => setPage('main')}>Replace</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link onClick={() => setPage('main')}>Home</Nav.Link>
    <Nav.Link href="#features">Profile</Nav.Link>
    <Nav.Link href="#pricing">My Tasks</Nav.Link>
    </Nav>
  </Navbar>
  <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
  </div>
  </div>
)

export default createTask
