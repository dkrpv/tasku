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
import 'firebase/auth';
import { firebaseUser } from './signUp'
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
})(props => <Checkbox color="default" {...props} />);

var lati = ""
var longi = ""

Geocode.setApiKey("AIzaSyDwtqxamzXJf8dV21Gy5IWYKUufoUaojkA");
function getLatitude(address) {
  Geocode.fromAddress(address).then(
      response => {
          const {lat} = response.results[0].geometry.location;
          console.log(lat)
          lati=lat
          this.setState({
            latitude: lati
          })
          console.log(lati)
          
      },
      error => {
          console.log(error);
      }
  )
}


function getLongitude(address) {
  Geocode.fromAddress(address).then(
      response => {
          const {lng} = response.results[0].geometry.location;
          console.log(lng)
          longi=lng
          this.setState({
            longitude: longi
          })
          console.log(longi)
      },
      error => {
          console.log(error);
      }
  )
}

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
     description: "",
     key: "",
     usrName: "",
     latitude: "",
     longitude: ""
    };
  }
  
  setLocation() {
    this.setState({
      latitude: getLatitude(this.state.latitude),
      longitude: getLongitude(this.state.longitude)
    })
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  addTask = e => {
    this.setLocation()
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
        key: key,
        usrName: usrName,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
    });  
    this.setState({
      address: "",
      category: "",
      city: "",
      offer: "",
      title: "",
      date: "",
      description: "",
      key: "",
      usrName: "",
      latitude: "",
      longitude: ""
    });
  };
  
  
  render() {
    return (
  <div className="createTask">
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '50%', top: '60%',
        transform: 'translate(-50%, -60%)'
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
