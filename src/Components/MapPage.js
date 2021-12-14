import React, {useState, useEffect} from 'react'
import Map from './Map'
import PointsForm from './PointsForm'
import LocationForm from './LocationForm'
import styled from 'styled-components';
import '../App.css';

function MapPage(){

  const [points, setPoints]=useState([])
  const[location, setLocation] = useState(["41.64752113311525", "-95.32354900194522"])

  function handleLocationFormSubmit(newLocation){
    setLocation(newLocation)
    
    }

  
  function handleAddPoint(newPoint){
   setPoints([...points,newPoint ])
  }

  useEffect(()=>{
    fetch("http://localhost:4000/mapsData")
    .then(r=>r.json())
    .then(data=>setPoints(data))
  }, [])
 
    return(
      <Container>
        
        <LocationForm onSetLocation={handleLocationFormSubmit}/>
        <PointsForm onAddPoint={handleAddPoint}/>
        <Map class="leaflet-container" points={points} location={location}/>
      </Container>
    )
}

export default MapPage

  const Container=styled.body`
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-image: linear-gradient(#F1F2B5,#135058 );`
  