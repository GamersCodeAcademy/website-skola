import React, { useRef } from 'react';
import axios from 'axios'
import '../../css/login.css'

function Login(){
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = () => {
	axios.post("http://127.0.0.1:4001/login", {
	    username: usernameRef.current.value,
	    password: passwordRef.current.value
	})
	    .then((res) => {
		console.log(res.data);
		if (res.data === "Nope") {}
		else {
		    localStorage.setItem("accessToken", res.data.accessToken)
		    localStorage.setItem("refreshToken", res.data.refreshToken)
		    localStorage.setItem("loggedIn", "true")
		    window.location.href = "/loggedIn"
		};
	    });
    }

    return (
	<div id="form">
	    <input type="text" placeholder="Username" ref={usernameRef}></input>
	    <input type="password" placeholder="Password" ref={passwordRef}></input>
	    <button onClick={handleLogin} id="login">Login</button>
	</div>
    )
};

export default Login;
