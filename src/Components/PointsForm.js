
import React, {useState} from 'react'
import '../App.css';

function PointsForm({onAddPoint}){
const [show, setShow]=useState(false)    
//form control state
const[name, setName]=useState("")
const[date, setDate]=useState("")
const[elevation, setElevation]=useState("")
const[description, setDescription]=useState("")
const[properties, setProperties]=useState("")
const[classification, setClassification]=useState("")
const[counts, setCounts]=useState("")
const[latitude, setLatitude]=useState("")
const[longitude, setLongitude]=useState("")

function toggleButton(event){
    setShow(!show)
    if(event.target.innerText === "Show Form"){
        event.target.innerText = "Hide Form"
    } else{ 
        event.target.innerText = "Show Form"
    }
}

function handleSubmit(event){
event.preventDefault()
const newPoint={
    name:name,
    date:date,
    groundElevation:elevation,
    description:description,
    properties:properties,
    classification:classification,
    blowCounts: counts,
    coordinates: [longitude, latitude ]
}

fetch("http://localhost:4000/mapsData", {
method: "POST",
headers:{
    "Content-Type": "application/json",    
},
body: JSON.stringify(newPoint),
})
.then((r)=>r.json())
.then( newPoint=>onAddPoint(newPoint))
setName("")
setDate("")
setElevation("")
setDescription("")
setProperties("")
setClassification("")
setCounts("")
setLatitude("")
setLongitude("")
}

return(
    <div class ="container">
    {show?<form onSubmit={handleSubmit}>
        <h2>Start adding your points</h2>
        <div class="wrapper">
            <div class="box">
                <input type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)}/>
                <label for="text">Borehole name</label>
            </div>

            <div class="box">
                <input type="date" name="date" value={date} onChange={(event)=>setDate(event.target.value)}/>
                <label for="date">Date</label>
            </div>

            <div class="box">
                <input type="text" name="elevation" value={elevation} onChange={(event)=>setElevation(event.target.value)}/>
                <label for="text">Ground Elevation</label>
            </div>
        </div>

            <div class="wrapper">
            <div class="box">
                <textarea type="text" name="description" value={description} onChange={(event)=>setDescription(event.target.value)}/>
                <label for="text">Description</label>
            </div>
            </div>

            <div class="wrapper">
            <div class="box">
                <textarea type="text" name="properties" value={properties} onChange={(event)=>setProperties(event.target.value)}/>
                <label for="text">Properties</label>
            </div>
            </div>

            <div class="wrapper">
            <div class="box">
                <input type="text" name="classification" value={classification} onChange={(event)=>setClassification(event.target.value)}/>
                <label for="text">Classification</label>
            </div>
    
            <div class="box">
                <input type="number" name="counts" value={counts} onChange={(event)=>setCounts(event.target.value)}/>
                <label for="number">Blow Counts</label>
            </div>
            </div>

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
                <input type="submit" name="submit" value="Add new point"/>
            </div>

         </form>:null}

          <button class="toggle-button" onClick={toggleButton}> Show Form
          </button>
            
    </div>
    
)

}


export default PointsForm

