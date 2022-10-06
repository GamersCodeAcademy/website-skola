const table = document.getElementById("table")

const list = (data) => {
    for(let i = 0; i < data.length; i++){
	const row = document.createElement("tr");

	const col1 =document.createElement("th")
	const col2 =document.createElement("th")
	const col3 =document.createElement("th")
	const col4 =document.createElement("th")

	col1.innerText = data[i].title
	col2.innerText = data[i].description
	col3.innerText = data[i].author
	col4.innerText = data[i].repo

	row.appendChild(col1)
	row.appendChild(col2)
	row.appendChild(col3)
	row.appendChild(col4)
	      
	table.appendChild(row)
    }
}

const resetToken = () => {
    axios.post("http://127.0.0.1:4001/token", {
	"token": localStorage.getItem("refreshToken")
    }).then((res) => {
	localStorage.setItem("accessToken", res.data.accessToken)
	create()
    })
}

axios.get("http://127.0.0.1:3001/projects", {
	headers: {
	    'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
	}
    })
    .then((res) => {
	console.log(res);
	list(res.data)
    })
	.catch((err) => {
	    if(err.response.status == 403){
		resetToken()
	    }
	});
