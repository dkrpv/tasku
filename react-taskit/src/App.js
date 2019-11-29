import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import placeholder from './placeholder.jpg';


function App() {
  return (
    <div className="App">
    <Navbar bg="success" variant="dark">
      <Navbar.Brand href="#home">Replace</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
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
    <tbody>
      <table class="cardTable">
        <th>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ placeholder } />
          <Card.Body>
            <Card.Title>Creating Tasks</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Card.Text>
            <Button variant="success">Create Task</Button>
          </Card.Body>
          </Card>
          </th>
          <th>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ placeholder } />
            <Card.Body>
              <Card.Title>Doing Tasks</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </Card.Text>
              <Button variant="success">Look for Tasks</Button>
            </Card.Body>
            </Card>
            </th>
            <th>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ placeholder } />
              <Card.Body>
                <Card.Title>Adjust Preferences</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Card.Text>
                <Button variant="success">Profile</Button>
              </Card.Body>
              </Card>
              </th>
        </table>
      </tbody>
      </div>
    </div>
  );
}

export default App;
