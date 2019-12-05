import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

const DoTask = ({ setPage }) => {
    return(
    <div className="profile">
    <div
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
      <FadeIn>
      <Alert variant="dark"
        style={{
          height: '60vh',
          width: '70vh',
        }}
      >
        <Alert.Heading>Tasks in your Area</Alert.Heading>
        <p>
          There are no tasks available. <Alert.Link onClick={() => setPage('createTask')}>Create</Alert.Link> one now!
        </p>
        <hr />
        <p className="mb-0">
          Before doing tasks, please read our <Alert.Link>Terms And Conditions</Alert.Link>.
        </p>
    </Alert>
    </FadeIn>
    </div>
    </div>
  )
  }

export default DoTask;
