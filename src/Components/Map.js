import React  from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import { ScaleControl } from 'react-leaflet'
import Point from './Point'
import ChangeView from './ChangeView'


//let number=["41.972152", "-87.964213"]


function Map({points, location}){

    return(
        <div>  
        <MapContainer center={location} zoom={12} scrollWheelZoom={false}>
        <ChangeView center={location} zoom={12} /> 
        <ScaleControl position="topleft" />
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