const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const loginButton = document.getElementById("login");

const loggedIn = () => {
    location.href = "home.html"
    console.log("your in")
};

const failed = () => {
    console.log("Try again")
};

const login = () => {
    axios.post("http://127.0.0.1:3001/login", {
	username: usernameField.value,
	password: passwordField.value
    })
	.then((res) => {
	    console.log(res);
	    if(res.data == "Success"){
		loggedIn();
	    }else{
		failed();
	    }
	});
}

loginButton.addEventListener("click", login);
