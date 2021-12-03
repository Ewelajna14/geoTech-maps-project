import React from 'react'
import MapPage from './MapPage';
import Header from "./Header"
import './App.css';


function App() {
  return (
    <>
    <Header/>
    <div class="leaflet-container">
      <MapPage/>
    </div>
    </>
  );
}

export default App;
