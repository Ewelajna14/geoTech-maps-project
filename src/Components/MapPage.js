import React, {useState, useEffect} from 'react'
import Map from './Map'
import PointsForm from './PointsForm'

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
        <PointsForm onAddPoint={handleAddPoint}/>
        <Map points={points}/>
      </div>
    )
}

export default MapPage