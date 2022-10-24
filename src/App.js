import React from 'react';
import Navbar from './components/NavBar.js';
import Landing from './pages/index.js'
import Login from './pages/login'
import About from './pages/about'
import LoggedIn from './pages/LoggedIn'
import CreateProject from './pages/projects/create'
import './css/global.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    function requireAuth(nextState, replace, next) {
	if (!localStorage.getItem("loggedIn") !== "true") {
	    replace({
		pathname: "/login",
	    });
	}

    return (
	<BrowserRouter>
            <Navbar/>
            <Routes>
		<Route path="/" element={<Landing/>}/>
		<Route path="/login" element={<Login/>}/>
		<Route path="/about" element={<About/>}/>
		<Route path="/loggedIn" element={<LoggedIn/>}/>
		<Route path="/project/create" element={<CreateProject/>}/>
            </Routes>
	</BrowserRouter>
    );
}

export default App;
