import React from 'react';
import Navbar from './NavBar';
import Landing from './Landing'
import Login from './Login'
import About from './About'
import LoggedIn from './LoggedIn'
import './global.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/loggedIn" element={<LoggedIn/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
