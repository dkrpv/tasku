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
import Geocode from "react-geocode";
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//* Firebase imports
import { auth, db } from './firebaseConfig'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const GreenCheckbox = withStyles({
  root: {
    color: '#34eb80'
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

class createTask extends React.Component {
  
  constructor() {
    super();
    this.state = {
     address: "",
     category: "",
     city: "",
     offer: "",
     title: "",
     date: "",
     description: ""
    };
  }
  
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  

  addTask = e => {
    e.preventDefault();
    db.settings({
        timestampsInSnapshots: true
    });
    const taskRef = db.collection("tasks").add({
        address: this.state.address,
        category: this.state.category,
        city: this.state.city,
        offer: this.state.offer,
        title: this.state.title,
        date: date,
        description: this.state.description,
    });  
    this.setState({
      address: "",
      category: "",
      city: "",
      offer: "",
      title: "",
      date: "",
      description: ""
    });
  };
  render() {
    return (
  <div className="createTask">
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '50%', top: '80%',
        transform: 'translate(-50%, -80%)'
      }}
    >
    <Form>
      <Form.Group controlId="formGridTitle">
        <Form.Label className="formText">Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="Enter Title" onChange={this.updateInput} value={this.state.title}/>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formOffer">
          <Form.Label className="formText">Offer</Form.Label>
          <InputGroup.Prepend>
            <Form.Control type="number" name="offer" placeholder="5.00" onChange={this.updateInput} value={this.state.offer}/>
              <InputGroup.Text id="inputGroupPrepend">€</InputGroup.Text>
            </InputGroup.Prepend>
        </Form.Group>

        <Form.Group as={Col} controlId="formCategory">
          <Form.Label className="formText">Category</Form.Label>
          <Form.Control name="category" as="select" onChange={this.updateInput} value={this.state.category}>
            <option>...</option>
            <option>Danila</option>
            <option>Karpov</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formCity">
          <Form.Label className="formText">City</Form.Label>
          <Form.Control type="text" name="city" placeholder="New York" onChange={this.updateInput} value={this.state.city}/>
        </Form.Group>
      </Form.Row>

    <Form.Group controlId="formAdress">
      <Form.Label className="formText">Address</Form.Label>
      <Form.Control type="text" name="address" placeholder="20 W 34th St" onChange={this.updateInput} value={this.state.address}/>
    </Form.Group>

    <Form.Group controlId="formDescription">
      <Form.Label className="formText">Description</Form.Label>
      <Form.Control as="textarea" rows="2" type="text" name="description" placeholder="Walk my dog please" onChange={this.updateInput} value={this.state.description}/>
    </Form.Group>

    <FormControlLabel
        control={
          <GreenCheckbox
            value="termsAgreed"
          />
        }
        label="I accept the Terms and Conditions"
      />
      <br />

    <Button className="gradBut" type="submit" onClick={this.addTask}>
      <b>Create</b>
    </Button>
    </Form>
  </div>
  </FadeIn>
  </div>
  );
}
}

export default createTask;
