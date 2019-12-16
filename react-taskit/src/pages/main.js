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
  <div
      style={{
        position: 'absolute', left: '20%', top: '50%',
        transform: 'translate(-20%, -50%)'
      }}
    >
      <h1 className="mainH1">
        Let's make more <br />
        time for the things <br />
        we care about. <br />
      </h1>
      <h5 className="mainH5">Everyone wants more free time. <br />
      Tasku makes it easier by creating some meaningful connections
      </h5>
      <br />
      <Button className="gradBut"><b>Search for Taskees</b></Button>
      <Button className="noGradBut"><b>Become a Taskee</b></Button>
    </div>
    </div>
    )
}

export default Main
