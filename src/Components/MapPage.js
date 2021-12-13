import React, {useState, useEffect} from 'react'
import {Route} from "react-router-dom";
import Map from './Map'
import PointsForm from './PointsForm'
import styled from 'styled-components';
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
      <Container>
        <PointsForm onAddPoint={handleAddPoint}/>
        <Map class="leaflet-container" points={points}/>
      </Container>
    )
}

export default MapPage

  const Container=styled.body`
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:#dad7cd;`
  