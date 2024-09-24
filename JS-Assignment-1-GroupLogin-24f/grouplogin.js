
var teamNumber = prompt("Which team do you belong to?");


var myTeamNumber = 5;


var classMate1FullName = "Himani Bansal";
var classmate2FullName = "Heather Boden";
var classmate3FullName = "Peiyu Han";
var classmate4FullName = "Harsh Parmar";
var classmate5FullName = "Tianrui Zhu";

if(teamNumber === null) {
    alert("Access Denied")
}else{
    teamNumber = Number(teamNumber);
    if(isNaN(teamNumber)){
        alert("Access Denied")
    }else if(teamNumber === myTeamNumber){
        var userName = prompt("First Name?");
    switch(userName){
        case "Himani":
         alert("Welcome back" + classMate1FullName);
         break;
        case "Heather":
         alert("Welcome back" + classmate2FullName);
         break;
        case "Peiyu":
         alert("Welcome back" + classmate3FullName);
         break;
        case "Harsh":
         alert("Welcome back" + classmate4FullName);
         break;
        case "Tianrui":
         alert("Welcome back" + classmate5FullName);
         break;
        default:
         alert("Access Denied");
         break;
      }
    }else{
        alert("Access Denied")
    }
}




