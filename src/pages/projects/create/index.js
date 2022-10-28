import React, { useRef } from 'react'
import axios from 'axios'
import '../../../css/createProject.css'
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
        axios.post("http://127.0.0.1:3001/project/create", {
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
	        if(res.data === "Success"){
		    success();
	        }else{
		    failed();
	        }
	    })
	    .catch((err) => {
	        if(err.response.status === 403){
		    resetToken();
	        }
	    });
    };

    return (
	<div className="wrapper">
	    <div className="box">
		<div id="form">
		    <input type="text" id="title" placeholder="Title" ref={titleRef}/>
		    <input type="text" id="desc" placeholder="Description" ref={descRef}/>
		    <input type="text" id="author" placeholder="Author" ref={authorRef}/>
		    <input type="text" id="repo" placeholder="Git Repository" ref={repoRef}/>
		    <button id="create" onClick={create}>Create</button>
		</div>
	    </div>
	</div>
    );
}

export default CreateProject;
