import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DoTask from './doTask';
import MyTask from './myTask';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

var repCount = 0;
var name = "Name Last";
const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

const profile = ({ setPage }) => (
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
        width: '60vw'
      }}
  >
      <h1>{ name }</h1>
      <p>
        Reputation: { repCount }
      </p>
      <p>
      </p>
      <Tabs defaultActiveKey="createTask" id="profileTabs">
        <Tab eventKey="createTask" title="Create Task">
          <DoTask />
        </Tab>
        <Tab eventKey="myTask" title="My Tasks">
          <MyTask />
        </Tab>
      </Tabs>
  </Jumbotron>
  </div>
  </FadeIn>
  </div>
)

export default profile
