const titleField = document.getElementById("title");
const descField = document.getElementById("desc");
const repoField = document.getElementById("repo");
const authorField = document.getElementById("author");
const createButton = document.getElementById("create");

const success = () => {
    location.href = "home.html"
    console.log("your in")
};

const failed = () => {
    console.log("Try again")
};

const create = () => {
    axios.post("http://127.0.0.1:3001/createProject", {
	title: titleField.value,
	desc: descField.value,
	repo: repoField.value,
	author: authorField.value
    })
	.then((res) => {
	    console.log(res);
	    if(res.data == "Success"){
		success();
	    }else{
		failed();
	    }
	});
}

createButton.addEventListener("click", create);
