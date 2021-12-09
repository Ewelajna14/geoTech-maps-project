import React from 'react'
import MapPage from './MapPage';
import NavBar from "./NavBar.js";
import styled from 'styled-components';


function App() {
  return (
    <Body>
    <NavBar/>
     <MapPage/>
    </Body>
  );
}

export default App;

const Body = styled.div`

background-color:#dad7cd;
`
