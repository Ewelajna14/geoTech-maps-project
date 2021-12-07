
import React, {useState} from 'react'
import '../App.css';

function PointsForm(){
const[show, setShow]=useState(true)

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
                <input type="text" name="name"/>
                <label for="text">Name</label>
            </div>

            <div class="box">
                <input type="date" name="date"/>
                <label for="date">Date</label>
            </div>

            <div class="box">
                <input type="text" name="elevation"/>
                <label for="text">Ground Elevation</label>
            </div>
        </div>

            <div class="wrapper">
            <div class="box">
                <textarea type="text" name="description"/>
                <label for="text">Description</label>
            </div>
            </div>

            <div class="wrapper">
            <div class="box">
                <textarea type="text" name="properties"/>
                <label for="text">Properties</label>
            </div>
            </div>

            <div class="wrapper">
            <div class="box">
                <input type="text" name="classification"/>
                <label for="text">Classification</label>
            </div>
            

            <div class="box">
                <input type="number" name="counts"/>
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