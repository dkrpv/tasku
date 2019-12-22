import React, { Component, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import '.././App.css';
import firebaseConfig from './firebaseConfig';
import GoogleButton from 'react-google-button'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import 'bootstrap/dist/css/bootstrap.min.css';

//* Material UI Avatar
import Avatar from './avatar'

//* Material UI imports
import { Button } from 'react-bootstrap';
import { useLocalState } from './hooks';

//* Firebase imports
import { auth, db } from './firebaseConfig'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;


const App = ({ setPage, user, signOut, signInWithGoogle }) => {
      const [userName, setUserName] = useLocalState('userName');
      const [userPhoto, setUserPhoto] = useLocalState('userPhoto');
      const [isSignedIn, setSignedIn] = useLocalState(false);
      const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

      useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
          console.log("user", user)
          setSignedIn(!!user)
        })
      })
      return (
        <div className="App">
        <div
            style={{
                position: 'absolute', left: '10%', top: '50%',
                transform: 'translate(-10%, -50%)'
        }}
        >
        <FadeIn>
        <h1 class="mainH1">Join our community of workers</h1>
        </FadeIn>
        </div>
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
        <StyledFirebaseAuth 
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
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
  
  const firebaseAppAuth = auth;
  
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(App);