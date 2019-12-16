import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import '.././App.css';
import firebaseConfig from './firebaseConfig';
import GoogleButton from 'react-google-button'

import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import 'bootstrap/dist/css/bootstrap.min.css';

//* Material UI Avatar
import Avatar from './avatar'

//* Material UI imports
import { Button } from 'react-bootstrap';
import { useLocalState } from './hooks';


const firebaseApp = firebase.initializeApp(firebaseConfig);

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;


const App = ({ setPage, user, signOut, signInWithGoogle }) => {
      const [userName, setUserName] = useLocalState('userName');
      const [userPhoto, setUserPhoto] = useLocalState('userPhoto');
      return (
        <div className="App">
        <div
            style={{
                position: 'absolute', left: '80%', top: '50%',
                transform: 'translate(-80%, -50%)'
        }}
        >
        <FadeIn>
        <Alert variant="light"
        style={{
          height: '60vh',
          width: '70vh',
        }}
        >
        <Alert.Heading>Sign Up</Alert.Heading>
        <hr />
        {
            user
                ? <p>Hello, {user.displayName}</p>
                : <p className="mb-0">
                Before signing up, please read our <Alert.Link>Terms And Conditions</Alert.Link>.
                </p>
        }
        <br></br>
  
        {
            user
                ? <Button variant="success" onClick={signOut}>Sign out</Button>
                : <GoogleButton className="googleButton" onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
        }
        <br></br>
        {
            user
                ? <Avatar source={user.photoURL}></Avatar>
                : <p></p>
        }
        {
            user
                ? <Button variant="success" onClick={() => setUserName(user.displayName)}>Set User</Button>
                : <p></p>
        }
        {
            user
                ? <Button variant="success" onClick={() => setUserPhoto(user.photoURL)}>Set Photo</Button>
                : <p></p>
        }
        <Button className="googleButton" id="nextButton" variant="success" onClick={() => setPage('profile')}>
          Next
        </Button>
        </Alert>
        </FadeIn>
        </div>
        </div>
      );
    }
  
  const firebaseAppAuth = firebaseApp.auth();
  
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(App);