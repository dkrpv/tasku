import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div `animation: 2s ${keyframes`${fadeIn}`}`;

const MyTask = ({ setPage }) => {
    return(
    <div className="profile">
    <div
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
      <FadeIn>
      <Alert variant="light"
        style={{
          height: '60vh',
          width: '70vh',
        }}
      >
        <Alert.Heading>Your Tasks</Alert.Heading>
        <p>
          You have no Tasks. <Alert.Link href="/createtask">Create</Alert.Link> one now!
        </p>
        <hr />
        <p className="mb-0">
          Before creating tasks, please read our <Alert.Link href="/terms">Terms And Conditions</Alert.Link>.
        </p>
    </Alert>
    </FadeIn>
    </div>
    </div>
  )
  }

export default MyTask;