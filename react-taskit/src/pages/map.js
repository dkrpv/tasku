import React, {useState} from "react";
import { Component } from "react";
import ReactMapGL from "react-map-gl"

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 61.4980214,
        longitude: 23.7603118,
        width: '100vw',
        height: '100vh',
        zoom: 10
    })

    return (<div>
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken={"pk.eyJ1IjoiZWV0dXBlIiwiYSI6ImNrM3ZzcGNudDBwa3kzb28zcHV6bjdqYTAifQ.nl-qZJk6zZ8sd5MODAImKw"}
        mapStyle="mapbox://styles/eetupe/ck1rymx8g23wc1dpa9wsqg8rk"
        onViewportChange={(viewport) => {
            setViewport(viewport)}}>
        </ReactMapGL>
        <div className="container">
            <form onSubmit={null} className="white">
                <h5 className="grey-text text-darken-3">Create task</h5>
                <div className="input-fiend">
                    <label htmlFor="task">Task</label>
                    <input type="task" id="task" onChange={null}/>
                </div>
                <div className="input-fiend">
                    <label htmlFor="location">Location</label>
                    <input type="location" id="location" onChange={null}/>
                </div>
                <div className="input-field">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
}
