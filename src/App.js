import React from "react";
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import MentionsLegales from "./pages/mentions-legales";



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
        <Route path="/mentions-legales" element={<MentionsLegales/>}/>
      </Routes>
     </main>
     <Footer/>
    </div>
  )
}

export default App;