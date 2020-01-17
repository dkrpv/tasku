import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import * as firebase from 'firebase/app';
import 'firebase/auth';


//* Material UI Avatar

var repCount = 0;
const FadeIn = styled.div `animation: 2s ${keyframes`${fadeIn}`}`;

var usrName = "";

const Profile = ({ setPage }) => {
  if (firebase.auth().currentUser !== null) {
    usrName = firebase.auth().currentUser.displayName;
  }
  else {
    setPage("signUp")
  }
  return (
  <div className="profile">
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
  <Jumbotron
      style={{
        width: '60vw',
        height: '100vh',
        position: 'relative',
        top: '20vh'
      }}
  >
      <h1 className="grad"><b>{usrName}</b></h1>
      <p>
        Reputation: { repCount }
      </p>
      <p>
      </p>
      <Tabs defaultActiveKey="createTask" id="profileTabs">
        <Tab eventKey="createTask" title="Create Task">
        <Alert variant="light"
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
        </Tab>
        <Tab eventKey="myTask" title="My Tasks">
        <Alert variant="light"
            style={{
              height: '60vh',
              width: '70vh',
            }}
          >
            <Alert.Heading>Your Tasks</Alert.Heading>
            <p>
              You have no Tasks. <Alert.Link onClick={() => setPage('createTask')}>Create</Alert.Link> one now!
            </p>
            <hr />
            <p className="mb-0">
              Before creating tasks, please read our <Alert.Link>Terms And Conditions</Alert.Link>.
            </p>
        </Alert>
        </Tab>
      </Tabs>
  </Jumbotron>
  </div>
  </FadeIn>
  </div>
  );
}

export default Profile;