import React from 'react';
import NavBar from './Components/navBar';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/about';
import Contact from './Components/Contact';

function App() {
    return (
        <BrowserRouter> 
            <div className = "App">
                <NavBar />
                <Routes path = '/' component = {Home} />
                <Routes path = '/about' component = {About} />
                <Routes path = '/contact' component = {Contact} />
            </div>
        </BrowserRouter> 
    );
}

export default App;