
import React from 'react'
import '../App.css';

function PointsForm(){
return(
    <div class ="form-container">
    <form class="form-inline">
        <label for="text">Name</label>
        <input
        type="text"
        name="name"
        placeholder="Type borehole name"
        />
        <br/>
        <label for="date">Date</label>
        <input
        type="date"
        name="date"
        placeholder="Type date"
        />
         <br/>
         <label for="text">Ground Elevation </label>
        <input
        type="text"
        name="elevation"
        placeholder="Type elevation"
        />
        <br/>
        <label for="text">Description</label>
        <input
        type="text"
        name="description"
        placeholder="Type description"
        />
        <br/>
        <label for="text">Properties</label>
        <input
        type="text"
        name="properties"
        placeholder="Type properties"
        />
        <br/>
        <label for="text">Classification</label>
        <input
        type="text"
        name="classification"
        placeholder="Type classification"
        />
        <br/>
        <label for="number">Blow Counts</label>
        <input
        type="number"
        name="blowcounts"
        placeholder="Type blow counts"
        />
        <br/>

        <input
        type="submit"
        name="submit"
        value="Add New Point"
        />
    </form>
    </div>
)

}


export default PointsForm