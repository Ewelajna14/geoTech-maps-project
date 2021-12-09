import React from 'react'
import {BrowserRouter, Route, Switch } from "react-router-dom";
import MapPage from './MapPage';
import NavBar from "./NavBar.js";
import Contacts from './Contacts';
import Footer from "./Footer"
import styled from 'styled-components';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Body>
     <MapPage/>
     <Route exact path="/contacts" >
     <Contacts/>
     </Route>
     <Footer/> 
    </Body>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

const Body = styled.body`

box-sizing:border-box;
margin:0;
padding;0;
background-color:#dad7cd;
`
