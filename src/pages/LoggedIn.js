import React from 'react';

function LoggedIn(){
    
    return (
	<div className="wrapper">
	    <div className="box">
		<p>Welcome back!</p>
		<button onClick={() => {window.location.href='project/create';}}>Create Project</button>
	    </div>
        </div>
    );
}

export default LoggedIn;
