import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import GoogleButton from 'react-google-button'

import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseApp = firebase.initializeApp(firebaseConfig);

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;


class App extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
  
      return (
        <div className="App">
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
                ? <button onClick={signOut}>Sign out</button>
                : <GoogleButton onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
        }
        <br></br>
        {
            user
                ? <img src={user.photoURL} width="150" height="150"></img>
                : <p></p>
        }
        </Alert>
        </FadeIn>
        </div>
        </div>
      );
    }
  }
  
  const firebaseAppAuth = firebaseApp.auth();
  
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(App);