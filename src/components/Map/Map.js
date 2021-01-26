import React from "react"
import styled from "styled-components"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const position = [50.297632, 18.8059419]

const Map = () => {
    if (typeof window !== "undefined") {
        return (
            <MapWrapper>
                <MapContainer
                    center={position}
                    zoom={16}
                    scrollWheelZoom={false}
                    style={{ width: "100%", height: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}></Marker>
                </MapContainer>
            </MapWrapper>
        )
    }

    return null
}

export default Map