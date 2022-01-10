import React from 'react';
import NavBar from './Components/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';

function App() {
    return (
        <BrowserRouter> 
            <div className = "App">
                <NavBar />
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/about" element = {<About />} />
                    <Route path = "/contact" element = {<Contact/>} />  
                </Routes>
              
            </div>
        </BrowserRouter> 
    );
}

export default App;