import React from "react";
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header";



function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<h1>Page d'accueil</h1>}/>
        <Route path="/services" element={<h1>Services</h1>}/>
        <Route path="/realisations" element={<h1>Réalisations</h1>}/>
        <Route path="/contact" element={<h1>Contact</h1>}/>
        <Route path="/mentions-legales" element={<h1>Mentions Légales</h1>}/>
      </Routes>
    </div>
  )
}

export default App;