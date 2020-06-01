import React, { useEffect, useState } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import '.././App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

//* Material UI Avatar
import Avatar from './avatar'

//* Material UI imports
import Button from '@material-ui/core/Button';

//* Firebase imports
import { auth } from '../firebaseConfig'

const FadeIn = styled.div `animation: 2s ${keyframes`${fadeIn}`}`;


const App = ({ setPage, user, signOut, signInWithGoogle }) => {
      const [isLoggedIn, setLoggedIn] = useState(false)

      function signUserOut() {
        firebase.auth().signOut()
        setLoggedIn(false)
      }

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
          setLoggedIn(!!user)
          console.log(isLoggedIn)
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
        <h1 className="mainH1">Join our community of workers</h1>
        </FadeIn>
        </div>
        <div
            style={{
                position: 'absolute', left: '80%', top: '50%',
                transform: 'translate(-80%, -50%)'
        }}
          >
        <FadeIn>
        <hr />
        {isLoggedIn ? (
          <div>
          <p>Hello, {firebase.auth().currentUser.displayName}</p>
          <Avatar source={firebase.auth().currentUser.photoURL}></Avatar>
          <Button id="nextButton" onClick={signUserOut}>Sign out!</Button>
          <Button className="googleButton" id="nextButton" variant="success" href="/profile">
          Next
        </Button>
          </div>
        ) : (
        <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <div>
        </div>
        </div>
        )}
        </FadeIn>
        </div>
        </div>
      );
    }
  
  const firebaseAppAuth = auth;
  
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };

  export const firebaseUser = firebase.auth().currentUser
  
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(App);