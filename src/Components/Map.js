import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import Point from './Point'
import LocationForm from './LocationForm'

//center={[41.64752113311525, -95.32354900194522]} 


function Map({points, location}){

    return(
        <div>
        <LocationForm/>
         <h1> Find your points here</h1>    
        <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Point points={points}/>
        </MapContainer>
        </div>

)
}

export default Map