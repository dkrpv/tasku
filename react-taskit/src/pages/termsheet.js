import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Checkbox } from '@material-ui/core';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

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
          width: '90vh',
        }}
      >
        <Alert.Heading className="grad">Terms and Conditions</Alert.Heading>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <hr />
        <Checkbox
            value="checkedA"
            color="#bdbdbd"
        />
    </Alert>
    </FadeIn>
    </div>
    </div>
  )
  }

export default MyTask;
