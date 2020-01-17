import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

//* Firebase imports
import { db } from './firebaseConfig'
import 'firebase/auth';

//* Material UI imports
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RemoveIcon from '@material-ui/icons/Remove';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FadeIn = styled.div `animation: 2s ${keyframes`${fadeIn}`}`;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var usrName = "";

if (firebase.auth().currentUser !== null) {
  usrName = firebase.auth().currentUser.displayName;
}
else {
  usrName = ""
}

var key = Math.floor(Math.random() * 10000000000);

const GreenCheckbox = withStyles({
  root: {
    color: '#34eb80'
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)

class createContact extends React.Component {
  
  
  constructor() {
    super();
    this.state = {
     firstname: "",
     surname: "",
     email: "",
     topic: "",
     date: "",
     message: "",
     key: "",
     usrName: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  addContact = e => {
    e.preventDefault();
    db.settings({
        timestampsInSnapshots: true
    });

    const contactRef = db.collection("contact").add({
        
        firstname: this.state.firstname,
        surname: this.state.surname,
        email: this.state.email,
        topic: this.state.topic,
        date: date,
        message: this.state.message,
        key: key,
        usrName: usrName,

    });  
    this.setState({
        firstname: "",
        surname: "",
        email: "",
        topic: "",
        date: "",
        message: "",
        key: "",
        usrName: ""
    });
  };
  
  
  render() {
    return (
  <div className="createTask">
  <Helmet/>
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '10%', top: '80%',
        transform: 'translate(-10%, -80%)'
      }}
    >
    
    <div style={{
        position: 'absolute', left: '0%', top: '-100%',
        transform: 'translate(0%, 100%)'
    }}
    >
    <h5 className="mainH5" >Questions or suggestions?</h5>
    </div>

    <div style={{
        position: 'absolute', left: '0%', top: '-100%',
        transform: 'translate(0%, 100%)'
    }}
    >
    <h1 className="mainH1" >Contact Us</h1>
    </div>
    <div style={{
        position: 'absolute', left: '0%', top: '-50%',
        transform: 'translate(0%, 50%)'
    }}>
        <RemoveIcon className="gradIcon"></RemoveIcon>
    </div>
    <Form>
    <Form.Row>
      <Form.Group controlId="formGridFirstname">
      <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <PersonIcon className="gradIcon"></PersonIcon>
                </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" name="firstname" placeholder="First Name" onChange={this.updateInput} value={this.state.firstname}/>
        </InputGroup>
      </Form.Group>
      
      <Form.Group controlId="formGridSurname">
      <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <CheckBoxOutlineBlankIcon className="gradIcon"></CheckBoxOutlineBlankIcon>
                </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="text" name="surname" placeholder="Surname" onChange={this.updateInput} value={this.state.surname}/>
        </InputGroup>
      </Form.Group>
    </Form.Row>

      <Form.Row>
        <Form.Group controlId="formEmail">
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <EmailIcon className="gradIcon"></EmailIcon>
                </InputGroup.Text>
        </InputGroup.Prepend>
            <Form.Control type="email" name="email" placeholder="Email" onChange={this.updateInput} value={this.state.email}/>
        </InputGroup>
        </Form.Group>

        <Form.Group controlId="formTopic">
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <LocalOfferIcon className="gradIcon"></LocalOfferIcon>
                </InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control type="text" name="topic" placeholder="Topic" onChange={this.updateInput} value={this.state.topic}/>
        </InputGroup>
        </Form.Group>

        </Form.Row>

        <Form.Group controlId="formMessage">
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>
                <ChatBubbleIcon className="gradIcon"></ChatBubbleIcon>
                </InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control type="text" name="message" placeholder="Message" onChange={this.updateInput} value={this.state.message}/>
        </InputGroup>
        </Form.Group>
      
      <br />

    <Button className="gradBut" type="submit" onClick={this.addContact}>
      <b>Send</b>
    </Button>
    </Form>
  </div>
    <div className="icons" style={{
        position: 'absolute', left: '5%', top: '100%',
        transform: 'translate(-5%, -100%)'
      }}
      >
    <div className="facebookIcon">
    <a href="https://fi-fi.facebook.com/"><Avatar className="facebookIcon"><FacebookIcon></FacebookIcon></Avatar></a>
    </div>
    <div className="facebookIcon">
    <a href="https://www.instagram.com/?hl=fi"><Avatar className="InstagramIcon"><InstagramIcon></InstagramIcon></Avatar></a>
    </div>
    <div className="facebookIcon">
    <a href="https://twitter.com/home?lang=fi"><Avatar className="TwitterIcon"><TwitterIcon></TwitterIcon></Avatar></a>
    </div>
    <div className="facebookIcon">
    <a href="https://www.linkedin.com/"><Avatar className="LinkedInIcon"><LinkedInIcon></LinkedInIcon></Avatar></a>
    </div>
    </div>
  </FadeIn>
  </div>
  );
}
}

export default createContact;