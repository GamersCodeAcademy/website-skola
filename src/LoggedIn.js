import React from 'react';
import './global.css';

function LoggedIn(){
    if(localStorage.getItem("loggedIn") !== "true") window.location.href = "/login";
    
    return (
        <div className="wrapper">
          <p>Welcome back!</p>
          <button onClick={() => {window.location.href='createProject';}}>Create Project</button>
        </div>
    );
}

export default LoggedIn;
