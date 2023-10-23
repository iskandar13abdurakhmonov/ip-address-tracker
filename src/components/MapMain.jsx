import React, { useEffect, useState } from 'react'
import styles from './MapMain.module.css'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function ChangeCenter({ position }) {
    const map = useMap()

    map.setView(position)
    return null
}

export default function MapMain({ location }) {
    console.log(location.location?.lat, location.location?.lng)

    useEffect(() => {
        if (location.location) {
            setMapCenter([location.location.lat, location.location.lng])
            setMarkerPosition([location.location.lat, location.location.lng])
        }
    }, [location])

    const [mapCenter, setMapCenter] = useState([41.311081, 69.240562])
    const [markerPosition, setMarkerPosition] = useState([41.311081, 69.240562])

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                className={styles.map}
                center={mapCenter}
                zoom={15}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <ChangeCenter position={mapCenter} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={markerPosition}>
                    <Popup>{location.location?.city}</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
