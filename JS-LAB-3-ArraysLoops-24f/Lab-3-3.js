//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var shoppingCart = [];

var itemTotalCost = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

while(itemTotalCost < 35){

	//GET ITEM COST FROM USER
	
	var useInput = prompt("Type in your item's price");

	
	//CONVERT USER INPUT TO A NUMBER

	var itemCost = parseInt(useInput);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	itemTotalCost += itemCost;
	
	//PUSH ITEM COST TO CART ARRAY

	shoppingCart.push(itemCost);
}
//SEND POPUP MESSAGE TO USER


alert("Your shipping for this order will be free !");

//SEND OUTPUT TO CONSOLE
console.log("Item price:" + shoppingCart.join("|"));
