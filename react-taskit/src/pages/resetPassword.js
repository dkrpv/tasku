import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
/*import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
*/
//* Firebase imports
import { db } from './firebaseConfig'
import 'firebase/auth';

const FadeIn = styled.div `animation: 2s ${keyframes`${fadeIn}`}`;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var usrName = "";
if (firebase.auth().currentUser != null) {
  usrName = firebase.auth().currentUser.displayName;
}
else {

}


var key = Math.floor(Math.random() * 10000000000);

/*const GreenCheckbox = withStyles({
  root: {
    color: '#34eb80'
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
*/
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
     usrName: "" 
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
        key: key,
        usrName: usrName,
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
      usrName: ""
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
        <Form.Label className="formText">Email</Form.Label>
        <Form.Control type="text" name="title" placeholder="someone@domain.com" onChange={this.updateInput} value={this.state.title}/>
      </Form.Group>
      <br />

    <Button className="gradBut" type="submit" onClick={null}>
      <b>Submit</b>
    </Button>
    </Form>
  </div>
  </FadeIn>
  </div>
  );
}
}

export default createTask;