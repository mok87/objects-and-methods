//create an object labeled customer and add the following key:value pairs//

const customer ={
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};
console.log('before',customer);

//create an object labeled customer and add the following key:value pairs//


//Modify the following properties in the customer object using bracket notation//

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee", "strawberry","matcha";
console.log('after',customer);
console.table(customer);

//Modify the following properties in the customer object using bracket notation//


//Delete the following properties in the customer object using the delete keyword//

delete customer["zipCode"]
delete customer["favoriteStore"]
console.table(customer)

//Delete the following properties in the customer object using the delete keyword//


//Add the following key values to the customer object using dot notation//



customer.toppings= ["chocolate sprinkles" ,"wafer straws" ,"gummy bears"]
customer.futureFlavors ="mango";
customer.todaysPurchaseCost =5.32;

console.log(customer)
console.table(customer)
//Add the following key:values to the customer object using dot notation//
