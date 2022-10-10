import React from 'react';
import './navbar.css'
import './global.css'

function Navbar(){
    return (
	<ul className="navBar">
	    <li><a href="/"><p>Home</p></a></li>
	    <li><a href="/login"><p>Login</p></a></li>
	    <li><a href="/about"><p>About</p></a></li>
	</ul>
    )
};

export default Navbar;
