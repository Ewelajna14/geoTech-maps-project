import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import {Icon} from "leaflet"


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
                <h4>{"Borehole: " + point.name}</h4>
                    <ul>
                        <li>{"Date: " + point.date}</li>
                        <li>{"Description: "+ point.description}</li>
                        <li>{"Properties: "+ point.properties}</li>
                        <li>{"Classification: "+ point.classification}</li>
                        <li>{"Blow Counts: "+ point.blowCounts}</li>
                    </ul>
                </div>
                </Popup>    
                </Marker>
                ) }) }
        </>
        )
}
export default Point