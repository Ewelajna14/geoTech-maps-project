import React from 'react'
import MapPage from './MapPage';
import Header from "./Header"
import '../App.css';


function App() {
  return (
    <div>
    <Header/>
     <MapPage class="leaflet-container"/>
    </div>
  );
}

export default App;
