import React, { useState, useEffect } from 'react';
import Map from './map'
import Geocode from "react-geocode";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase/app';
import { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl"

import { auth, db } from './firebaseConfig'
Geocode.setApiKey("AIzaSyDwtqxamzXJf8dV21Gy5IWYKUufoUaojkA");
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

getGeocode("Torvisienenkatu")

const MapPage = ({ setPage }) => {
  const [tasks, setTasks] = useState({
    tasks:null
  })
  const [viewport, setViewport] = useState({
    latitude: 61.4980214,
    longitude: 23.7603118,
    width: "100vw",
    height: "100vh",
    zoom: 10
})

const [selectedTask, setSelectedTask] = useState(null);

useEffect(() => {
  const listener = (e) => {
    if (e.key === "Escape") {
      setSelectedTask(null)
    }
  };
  window.addEventListener("keydown", listener);

  return () => {
    window.removeEventListener("keydown", listener);
  }
}, [])

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
      <div>
      <ReactMapGL {...viewport} 
      mapboxApiAccessToken={"pk.eyJ1IjoiZWV0dXBlIiwiYSI6ImNrM3ZzcGNudDBwa3kzb28zcHV6bjdqYTAifQ.nl-qZJk6zZ8sd5MODAImKw"}
      mapStyle="mapbox://styles/eetupe/ck4cqg2r43eia1cpi3pnac7w5"
      onViewportChange={(viewport) => {
          setViewport(viewport)}}>
          <Marker key={null} latitude={null} longitude={null}>
            <button className="marker-btn" onClick={(e) => {
              e.preventDefault();
              setSelectedTask(null)
            }}>
              <img src="" alt="Task marker"></img>
            </button>
          </Marker>

          {selectedTask ? (
              <Popup latitude={null} longitude={null} onClose={() => {
                setSelectedTask(null)
              }}>
                <div>
                <h2>{tasks.title}</h2>
                <p>{tasks.description}</p>
                </div>
              </Popup>
          ) : null}
      </ReactMapGL>
  </div>
  )
    }

export default MapPage;
