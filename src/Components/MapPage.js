import React, {useState, useEffect} from 'react'
import Map from './Map'

function MapPage(){

  const [points, setPoints]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/mapsData")
    .then(r=>r.json())
    .then(data=>setPoints(data))
  }, [])
 

  

    return(
      <div>
        <Map points={points}/>
      </div>
    )
}

export default MapPage