import React, {useState} from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import Point from './Point'
import LocationForm from './LocationForm'

//center={[41.64752113311525, -95.32354900194522]} 


function Map({points}){

    const[location, setLocation] = useState(["41.64752113311525", "-95.32354900194522"])
    

    function handleLocationFormSubmit(newLocation){
        setLocation(newLocation)
        console.log(newLocation)
        
        }

        let number=["41.972152", "-87.964213"]

    return(
        <div>
        <LocationForm onSetLocation={handleLocationFormSubmit}/>
         <h2> Find your points here</h2>    
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