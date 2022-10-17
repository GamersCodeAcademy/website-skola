import React, { useRef } from 'react'
import axios from 'axios'

function CreateProject(){
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const repoRef = useRef(null);
    const authorRef = useRef(null);

    const success = () => {
        window.location.href = "loggedIn";
        console.log("your in");
    };

    const failed = () => {
        console.log("Try again");
    };

    const resetToken = () => {
        axios.post("http://127.0.0.1:4001/token", {
	    "token": localStorage.getItem("refreshToken")
        }).then((res) => {
	    localStorage.setItem("accessToken", res.data.accessToken);
	    create();
        });
    };

    const create = () => {
        axios.post("http://127.0.0.1:3001/createProject", {
	    title: titleRef.current.value,
	    desc: descRef.current.value,
	    repo: repoRef.current.value,
	    author: authorRef.current.value
        }, {
	    headers: {
	        'authorization': 'Bearer ' + localStorage.getItem("accessToken")
	    }
        })
	    .then((res) => {
	        console.log(res);
	        if(res.data == "Success"){
		    success();
	        }else{
		    failed();
	        }
	    })
	    .catch((err) => {
	        if(err.response.status == 403){
		    resetToken();
	        }
	    });
    };

    return (
        <div className="wrapper">
          <label>Title:</label>
          <input type="text" id="title" ref={titleRef}/>
          <label>Description:</label>
          <input type="text" id="desc" ref={descRef}/>
          <label>Autor:</label>
          <input type="text" id="author" ref={authorRef}/>
          <label>Github Repo:</label>
          <input type="text" id="repo" ref={repoRef}/>
          <button onClick={create}>Create</button>
        </div>
    );
}

export default CreateProject;
