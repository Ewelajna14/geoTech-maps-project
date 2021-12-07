
import React, {useState} from 'react'
import '../App.css';

function PointsForm(){
const[show, setShow]=useState(true)
//form control state
const[name, setName]=useState("")
const[date, setDate]=useState("")
const[elevation, setElevation]=useState("")
const[description, setDescription]=useState("")
const[properties, setProperties]=useState("")
const[classification, setClassification]=useState("")
const[counts, setCounts]=useState("")


function toggleButton(event){
    setShow(!show)
    if(event.target.innerText==="Hide Form"){
        event.target.innerText="Show Form"
    }
    else{
        event.target.innerText="Hide Form"
    }
}

return(
    <div class ="container">
    {show? <form>
        <h2>Form</h2>
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

            
            <div class="box">
                <input type="submit" name="submit" value="Add new point"/>
            </div>
        
         </form>:null}
          
            <button onClick={toggleButton}class="toggle-button">Hide Form</button>
    </div>
    
)

}


export default PointsForm