import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//* Firebase imports
import { auth, db } from './firebaseConfig'
import 'firebase/auth';
import { firebaseUser } from './signUp'

//* Material UI imports
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RemoveIcon from '@material-ui/icons/Remove';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var usrName = "";

if (firebase.auth().currentUser !== null) {
  usrName = firebase.auth().currentUser.displayName;
}
else {
  usrName = ""
}

console.log(usrName)
console.log(firebase.auth().currentUser == null)



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
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '10%', top: '60%',
        transform: 'translate(-10%, -60%)'
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
  </FadeIn>
  </div>
  );
}
}

export default createContact;
