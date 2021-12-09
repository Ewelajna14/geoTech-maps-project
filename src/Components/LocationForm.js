import React, {useState} from 'react';

function LocationForm({onSetLocation}){

    const[latitude, setLatitude]=useState("")
    const[longitude, setLongitude]=useState("")

    function handleSetLocation(e){
    e.preventDefault()    
    const newLocation=[latitude, longitude]
    onSetLocation(newLocation)
    
    }

    return(
        <div>
            <form onSubmit={handleSetLocation}>
            <div class="wrapper">
            <div class="box">
                <input type="number" name="latitude" value={latitude} onChange={(event)=>setLatitude(event.target.value)}/>
                <label for="number">Latitude</label>
            </div>
    
            <div class="box">
                <input type="number" name="longitude" value={longitude} onChange={(event)=>setLongitude(event.target.value)}/>
                <label for="number">Longitude</label>
            </div>
            </div>

            <div class="box">
                <input type="submit" name="submit" value="Set Location"/>
            </div>
            </form>
        </div>
    )
}

export default LocationForm