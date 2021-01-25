import React from 'react'
import styled from "styled-components";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapWrapper = styled(MapContainer)`
  height: 100%;
  width: 100%;
`

const Map = () => {
    const position = [51.505, -0.09]
    return (
        <MapWrapper center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapWrapper>
    )
}

export default Map