import React from 'react'
import {Route, Switch } from "react-router-dom";
import MapPage from './MapPage';
import NavBar from "./NavBar.js";
import Contacts from './Contacts';
import Footer from "./Footer"
import styled from 'styled-components';



function App() {
  return (
    <Body>
    <NavBar/>
     <MapPage/>
     <Contacts/>
     <Footer/>
    </Body>
  );
}

export default App;

const Body = styled.body`

box-sizing:border-box;
margin:0;
padding;0;
background-color:#dad7cd;
`
