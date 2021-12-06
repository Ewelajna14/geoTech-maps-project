import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import {Icon} from "leaflet"
import 'leaflet/dist/leaflet.css'

const geoIcon =new Icon({
    iconUrl: "/geoicon.svg",
    iconSize: [35,35]})

function Point ({points}){

    return(
        <>
        {
            points.map((point)=>{
                return(
                    <Marker key={point.id} position={[point.coordinates[1], point.coordinates[0]]} icon={geoIcon}>
                     <Popup position={[point.coordinates[1], point.coordinates[0]]}>
                         <div>
                             <h1>{point.id}</h1>
                         </div>
                    </Popup>    
                    </Marker>
                )    
            })
        }
        </>
)
}

export default Point