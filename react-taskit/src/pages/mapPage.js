import React, { useState, useEffect } from 'react';
import Map from './map'
import Geocode from "react-geocode";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';

import { auth, db } from './firebaseConfig'
Geocode.setApiKey("AIzaSyBmDUHwaYX1iuQFPbvv3b0VPzGw0AqVbD0");
function getGeocode(address) {
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.error(error);
    }
  );
}

getGeocode("Eiffel Tower")

const MapPage = ({ setPage }) => {
  const [tasks, setTasks] = useState({
    tasks:null
  })
  useEffect(() => {
    db.collection('tasks')
            .get()
            .then( snapshot => {
                const tasks = []
                snapshot.forEach( doc => {
                    const data = doc.data()
                    tasks.push(data)
                })
                setTasks( { tasks: tasks })
                console.log(snapshot)
            })
            .catch( error => console.log(error))
  }, [])

    return(
    <Map width="100vw" height="100vh"></Map>
  )
    }

export default MapPage;
