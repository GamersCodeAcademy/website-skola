const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const loginButton = document.getElementById("login");

const loggedIn = (data) => {
    location.href = "home.html"
    console.log("your in")
    localStorage.setItem("accessToken", data.accessToken)
};

const failed = () => {
    console.log("Try again")
};

const login = () => {
    axios.post("http://127.0.0.1:4001/login", {
	username: usernameField.value,
	password: passwordField.value
    })
	.then((res) => {
	    console.log(res.data);
	    if (res.data === "Nope") failed();
	    else loggedIn(res.data);
	});
}

loginButton.addEventListener("click", login);
