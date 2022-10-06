const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const emailField = document.getElementById("email");
const signupButton = document.getElementById("signup");

const signedUp = () => {
    location.href = "login.html"
};

const signup = () => {
    axios.post("http://127.0.0.1:4001/signup", {
	username: usernameField.value,
	email: emailField.value,
	password: passwordField.value
    })
	.then((res) => {
	    console.log(res);
	    if(res.data == "Success"){
		signedUp()
	    }else{
		
	    }
	});
}

signupButton.addEventListener("click", signup);
