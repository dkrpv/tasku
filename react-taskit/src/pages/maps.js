import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import './firebaseConfig'
import Map from './map'
import Geocode from "react-geocode";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { auth, db } from './firebaseConfig'
Geocode.setApiKey(process.env.REACT_APP_GEOCODE_API_KEY);

function getGeocode(address) {
    Geocode.fromAddress(address).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            console.log(lat);
            console.log(lng)
            return ({
                lat,
                lng
            })
        },
        error => {
            console.error(error);
        }
    );
}

function getLatitude(address) {
    Geocode.fromAddress(address).then(
        response => {
            const { lat } = response.results[0].geometry.location;
            console.log(lat)
            if (lat) {
                return lat
            } else {

            }

        },
        error => {
            console.log(error);
        }
    )
}

function getLongitude(address) {
    Geocode.fromAddress(address).then(
        response => {
            const { lng } = response.results[0].geometry.location;
            console.log(lng)
            if (lng) {
                return lng
            } else {

            }
        },
        error => {
            console.log(error);
        }
    )
}

function useTasks() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .onSnapshot((snapshot) => {
                const newTasks = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setTasks(newTasks)
            })

        return () => unsubscribe()
    }, [])

    return tasks
}

const TaskList = () => {
    const tasks = useTasks()
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

    return ( <div>
        <ReactMapGL {...viewport }
        mapboxApiAccessToken = { process.env.REACT_APP_MAPBOX_API_KEY }
        mapStyle = "mapbox://styles/eetupe/ck4cqg2r43eia1cpi3pnac7w5"
        onViewportChange = {
            (viewport) => {
                setViewport(viewport)
            }
        } > {
            tasks.map((task) =>
                <div>
                <Marker key = { task.id }
                latitude = { task.latitude }
                longitude = { task.longitude } >
                <button className = "marker-btn"
                onClick = {
                    (e) => {
                        e.preventDefault();
                        setSelectedTask(task)
                    }
                } >
                <LocationOnIcon > </LocationOnIcon> 
                </button> 
                </Marker>

                {
                    selectedTask ? ( 
                        <Popup latitude = { task.latitude }
                        longitude = { task.longitude }
                        onClose = {
                            () => {
                                setSelectedTask(null)
                            }
                        } >
                        <div key = { task.id }>
                        <p> { task.title } </p> 
                        </div> 
                        </Popup>

                    ) : null
                } 
                </div>
            )
        }

        </ReactMapGL>

        </div>
    )
}

export default TaskList