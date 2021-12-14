import React, {useState} from 'react';
import styled from 'styled-components';

function LocationForm({onSetLocation}){

    const[latitude, setLatitude]=useState("")
    const[longitude, setLongitude]=useState("")

    function handleSetLocation(e){
    e.preventDefault()    
    const newLocation=[latitude, longitude]
    onSetLocation(newLocation)
    setLatitude("")
    setLongitude("")
    }

    return(
        <Wrapper>
            <form onSubmit={handleSetLocation}>  
            <Container>
            <Title>Your Coordinates</Title> 
            <InputContainer>
                <input type="number" name="latitude" value={latitude} onChange={(event)=>setLatitude(event.target.value)} placeholder="Type Lattitude"/>
                <input type="number" name="longitude" value={longitude} onChange={(event)=>setLongitude(event.target.value)} placeholder="Type Longitude"/> 
            </InputContainer>
            </Container>
            <FormButton>
                <input type="submit" name="submit" value="Set Location"/>
            </FormButton>
            </form>
        </Wrapper>
    )
}

export default LocationForm

const Title = styled.h1`
grid-column: 1/4;
grid-row:1;
font-size: 2.5rem;
`

const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
width:50vh;
`

const InputContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:20%;
width:100%;
input{
background: rgba(255, 255, 255, 0.15);
border-radius: 15px;
width 80%;
height:2rem;
padding 1rem;
border:none;
margin: 10px;
outline:none;
font-size:1rem;
font-family: "Trattatello", cursive;
font-weight:bold;
}
`

const FormButton = styled.div`
margin:2rem;
display:flex;
align-items:left;
justify-content:left;
width:100%;
input{ 
    background: linear-gradient(to right, #76b852,#8DC26F );
    text-transform:uppercase;
    font-family: "Trattatello", cursive;
    font-size:0.8rem;
    width:20%;
    height:2rem;
    border-radius:15px;
    border:none;
    cursor: pointer;
}
`

const Wrapper = styled.div`
margin-bottom:20px;
margin-left:30px;

`


