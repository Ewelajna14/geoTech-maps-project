import React from 'react'
import {Route, Switch } from "react-router-dom";
import MapPage from './MapPage';
import InfoSection from './InfoSection';
import NavBar from "./NavBar.js";
import Contacts from './Contacts';
import Footer from "./Footer"




function App() {
  return (
    <div>
    <NavBar/>
    <Switch>
    <Route path='/' exact component={InfoSection}/>
    <Route path='/maps' exact component={MapPage}/>
    <Route path='/contacts' exact component ={Contacts}/>
     </Switch>
     <Footer/> 
    </div>
  );
}

export default App;

