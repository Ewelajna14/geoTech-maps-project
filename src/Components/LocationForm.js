import React, {useState} from 'react';
import styled from 'styled-components';

function LocationForm({onSetLocation}){

    const[latitude, setLatitude]=useState("")
    const[longitude, setLongitude]=useState("")

    function handleSetLocation(e){
    e.preventDefault()    
    const newLocation=[latitude, longitude]
    onSetLocation(newLocation)
    
    }

    return(
        <Wrapper>
            <form onSubmit={handleSetLocation}>
            
            <FormRow>
            <FormColumn>
            <h2>Yours coordinates:</h2>
                <label for="number">Latitude</label>
                <input type="number" name="latitude" value={latitude} onChange={(event)=>setLatitude(event.target.value)}/>
                
                <label for="number">Longitude</label>
                <input type="number" name="longitude" value={longitude} onChange={(event)=>setLongitude(event.target.value)}/> 
                </FormColumn>
            </FormRow>
            

            <FormButton>
                <input type="submit" name="submit" value="Set Location"/>
            </FormButton>
            
            </form>
        </Wrapper>
    )
}

export default LocationForm

const FormRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`

const FormColumn=styled.div`
padding:20px;
label{
    margin:10px;
    font-weight:bold;
}

input{
    border-radius: 25px;
    border-color: black;
    background:transparent;
    padding: 10px; 
}

h2{
    font-size:30px;
}

`
const FormButton = styled.div`
input{
  padding: 5px 5px;
  font-size:15px;
  margin-left:100px;
  margin-top: 5px;
  border-radius: 12px;
  cursor: pointer;
  background:transparent;
}
`

const Wrapper = styled.div`
margin-bottom:20px;
`


