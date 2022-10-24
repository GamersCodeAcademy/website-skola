import React from 'react';

function LoggedIn(){
    
    return (
        <div className="wrapper">
          <p>Welcome back!</p>
          <button onClick={() => {window.location.href='project/create';}}>Create Project</button>
        </div>
    );
}

export default LoggedIn;
