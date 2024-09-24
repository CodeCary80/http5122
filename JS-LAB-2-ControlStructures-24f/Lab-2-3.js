//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var emailsignup = confirm("Would you like to sign up for our email list?")


//==== LOGIC =============
if(emailsignup === true){
    var userInput = prompt("please type your email address","me@example.com")
    if(userInput === "null" || userInput === "" || userInput === "me@example.com"){
    alert("Thank you, but your email was not valid")
    }else{
    alert("Thank you, our next newsletter will besent to" + userInput)
    }
}else{
    alert("Thank you, we will not bother you again")
}