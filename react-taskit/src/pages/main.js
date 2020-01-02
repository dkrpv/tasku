import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import placeholder from './placeholder.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import '.././App.css';

import Map from './map'
// *Material design icons
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';

// *Page scroller test

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
      <span class="mainH1">Let's make more</span>
      <br />
      <span class="timeH1">time </span>
      <span class="mainH1">for the things </span>
      <br />
      <span class="mainH1">we care about.</span>
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
