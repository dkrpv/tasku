import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Checkbox } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

const GreenCheckbox = withStyles({
  root: {
    color: '#34eb80'
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const termsheet = ({ setPage }) => {
    return(
    <div className="profile">
    <div
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
      <FadeIn>
      <Alert variant="light"
        style={{
          height: '60vh',
          width: '90vh',
        }}
      >
        <Alert.Heading className="grad">Terms and Conditions</Alert.Heading>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <hr />
        <FormControlLabel
        control={
          <GreenCheckbox
            value="termsAgreed"
          />
        }
        label="I accept the Terms and Conditions"
      />
      <br />
    </Alert>
    </FadeIn>
    </div>
    </div>
  )
  }

export default termsheet;
