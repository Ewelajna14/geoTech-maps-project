import React, {useState, useEffect} from 'react'
import Map from './Map'
import PointsForm from './PointsForm'
import InfoSection from './InfoSection';
import '../App.css';

function MapPage(){

  const [points, setPoints]=useState([])

  function handleAddPoint(newPoint){
   setPoints([...points,newPoint ])
  }

  useEffect(()=>{
    fetch("http://localhost:4000/mapsData")
    .then(r=>r.json())
    .then(data=>setPoints(data))
  }, [])
 
    return(
      <div>
        <InfoSection/>
        <PointsForm onAddPoint={handleAddPoint}/>
        <Map  class="leaflet-container" points={points}/>
      </div>
    )
}

export default MapPage