import React, {useState, useEffect} from 'react'
import Map from './Map'
import PointsForm from './PointsForm'
import InfoSection from './InfoSection';
import '../App.css';

function MapPage(){

  const [points, setPoints]=useState([])
  const[location, setLocation] = useState([41.64752113311525, -95.32354900194522])

  function handleAddPoint(newPoint){
   setPoints([...points,newPoint ])
  }

  useEffect(()=>{
    fetch("http://localhost:4000/mapsData")
    .then(r=>r.json())
    .then(data=>setPoints(data))
  }, [])
 
    return(
      <>
        <InfoSection/>
        <PointsForm onAddPoint={handleAddPoint}/>
        <Map class="leaflet-container" points={points} location={location}/>
      </>
    )
}

export default MapPage

