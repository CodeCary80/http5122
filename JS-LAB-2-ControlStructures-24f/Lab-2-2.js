//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input

var userName = "dart"
var passWord = "vader"

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME

var userNameInput = prompt("username?")
console.log(userName)


//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
var passWordInput = prompt("password?")
console.log(passWord)
//5. CREATE POPUP BOX FOR PASSWORD

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(userNameInput === userName && passWordInput === passWord){
	alert("Welcome back" + userName)
	console.log("Login successful")
}else{
	alert("Invalid username/password")
	console.log("Login Fail")
}



//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE