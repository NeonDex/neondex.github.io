var objPeople = [
{
	username: "Joshua"
	password: "123456"
},
{
	username: "Patrick"
	password: "thestar"
},
{
	username: "Eucogco"
	password: "1234567"
	},
]
function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	for (i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) 
		{
	console.log(username + "is logged in!!!")
	}
	else
{console.log("Incorrect username or password")
}