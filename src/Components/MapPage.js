import React, {useState, useEffect} from 'react'
import {Route} from "react-router-dom";
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
      <>
        <InfoSection/>
        <Route path="/form">
        <PointsForm onAddPoint={handleAddPoint}/>
        </Route>
        <Map class="leaflet-container" points={points}/>
      </>
    )
}

export default MapPage

