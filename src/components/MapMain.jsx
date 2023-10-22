import React from 'react'
import styles from './MapMain.module.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapMain() {
    return (
        <div>
            <MapContainer
                className={styles.map}
                center={[41.311081, 69.240562]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    className={styles.marker}
                    position={[41.311081, 69.240562]}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
