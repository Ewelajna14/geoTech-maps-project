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
            <Title>Your Coordinates</Title>
            <Element1>
                <input type="number" name="latitude" value={latitude} onChange={(event)=>setLatitude(event.target.value)} placeholder="Type Lattitude"/>
            </Element1>
            <Element2>
                <input type="number" name="longitude" value={longitude} onChange={(event)=>setLongitude(event.target.value)} placeholder="Type Longitude"/> 
            </Element2>
            <FormButton>
                <input type="submit" name="submit" value="Set Location"/>
            </FormButton>
            </FormRow>
            </form>
        </Wrapper>
    )
}

export default LocationForm

const Title = styled.h1`
grid-column: 1/4;
grid-row:1;
`

const FormRow=styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(12, 1fr);
grid-gap: 20px;
`

const Element1=styled.div`
grid-column: 1/3;
grid-row: 2;
input{
    width:100%;
    font-size:15px;
    background:transparent;
    padding: 5px; 
    border-color: black;
}
`

const Element2=styled.div`
grid-column: 3/5;
grid-row: 2;
input{
  width:100%;
  font-size:15px;
  background:transparent;
  padding: 5px; 
  border-color: black;
  }
`

const FormButton = styled.div`
grid-column: 1/2;
grid-row: 3; 
input{ 
  font-size:15px;
  border-radius: 10px;
  cursor: pointer;
  background:transparent;
}
`

const Wrapper = styled.div`
margin-bottom:20px;
margin-top: 10px;
margin-left:30px;

`


