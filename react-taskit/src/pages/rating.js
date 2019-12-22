import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

//* Material Ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { auth,db } from './firebaseConfig'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export default function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}