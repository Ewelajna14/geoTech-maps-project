
import React from 'react'

function PointsForm(){
return(
    <div>
    <form>
        <h3>Type...</h3>
        <input
        type="text"
        name="name"
        placeholder="Type..."
        />
        <br/>
        <input
        type="text"
        name="name"
        placeholder="Type..."
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