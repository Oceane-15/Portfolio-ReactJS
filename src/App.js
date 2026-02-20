import React from "react";
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";



function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/realisations" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/mentions-legales" element={<h1>Mentions Légales</h1>}/>
      </Routes>
     </main>
     <Footer/>
    </div>
  )
}

export default App;