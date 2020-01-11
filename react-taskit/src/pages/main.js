import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import '.././App.css';
import Contact from './contact'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;


const Main = ({ setPage }) => {
    return(
  <div className="Main">
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '20%', top: '50%',
        transform: 'translate(-20%, -50%)'
      }}
    >
      <h1>
      <span className="mainH1">Let's make more</span>
      <br />
      <span className="timeH1">time </span>
      <span className="mainH1">for the things </span>
      <br />
      <span className="mainH1">we care about.</span>
      </h1>
      <h5 className="mainH5">
      <span className="mainH5">Everyone wants more free time. </span>
      <span className="mainH5">Tasku makes it easier</span>
      <br />
      <span className="mainH5">by creating some meaningful connections</span>
      
      </h5>
      <br />
      <Button className="gradBut" onClick={() => setPage('tasks')}><b>Search for Tasks</b></Button>
      <Button className="noGradBut" onClick={() => setPage('createTask')}><b>Become a Tasker</b></Button>
    </div>
    </FadeIn>
    
    </div>
    )
}

export default Main
