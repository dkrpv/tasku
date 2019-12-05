import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import placeholder from './placeholder.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

const Main = ({ setPage }) => {
    return(
  <div className="Main">
  <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
  <FadeIn>
  <tbody>
    <table className="cardTable">
      <th>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ placeholder } />
          <Card.Body>
            <Card.Title>Creating Tasks</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Card.Text>
            <Button variant="success" onClick={() => setPage('createTask')}>Create Task</Button>
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
              <Button variant="success" onClick={() => setPage('doTask')}>Look for Tasks</Button>
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
                <Button variant="success" onClick={() => setPage('profile')}>Profile</Button>
              </Card.Body>
              </Card>
              </th>
        </table>
      </tbody>
      </FadeIn>
    </div>
    </div>
    )
}

export default Main
