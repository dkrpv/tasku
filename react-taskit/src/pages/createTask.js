import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

const createTask = ({ setPage }) => (
  <div className="createTask">
  <FadeIn>
  <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
    <Form>
      <Form.Group controlId="formGridTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formOffer">
          <Form.Label>Offer</Form.Label>
          <InputGroup.Prepend>
            <Form.Control placeholder="5.00" />
              <InputGroup.Text id="inputGroupPrepend">€</InputGroup.Text>
            </InputGroup.Prepend>
        </Form.Group>

        <Form.Group as={Col} controlId="formCategorye">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="New York" />
        </Form.Group>
      </Form.Row>

    <Form.Group controlId="formAdress">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="20 W 34th St" />
    </Form.Group>

    <Form.Group id="formTermBox">
      <Form.Check type="checkbox" label="I have read and accept the terms and conditions" />
    </Form.Group>

    <Button variant="success" type="submit">
      Create
    </Button>
    </Form>
  </div>
  </FadeIn>
  </div>
)

export default createTask;
