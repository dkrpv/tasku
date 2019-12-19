import React, {useState} from "react";
import { Component } from "react";
import ReactMapGL from "react-map-gl"

export default function Map({ width, height }) {
    const [viewport, setViewport] = useState({
        latitude: 61.4980214,
        longitude: 23.7603118,
        width: width,
        height: height,
        zoom: 10
    })

    return (<div>
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken={"pk.eyJ1IjoiZWV0dXBlIiwiYSI6ImNrM3ZzcGNudDBwa3kzb28zcHV6bjdqYTAifQ.nl-qZJk6zZ8sd5MODAImKw"}
        mapStyle="mapbox://styles/eetupe/ck4cqg2r43eia1cpi3pnac7w5"
        onViewportChange={(viewport) => {
            setViewport(viewport)}}>
        </ReactMapGL>
    </div>
    )
}
