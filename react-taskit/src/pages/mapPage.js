import React from 'react';
import Map from './map'
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';

import { auth, db } from './firebaseConfig'

const MapPage = ({ setPage }) => {
    return(
    <Map width="100vw" height="100vh"></Map>
  )
  }

export default MapPage;
