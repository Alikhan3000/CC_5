// Task 1: Object Properties

let  customer = {           //declared an object with 3 properties

    name: "John Doe", 
    age: 35,
    email: "john.doe@mail.com"
};

console.log(`Name:${customer.name}`);   //logged each property of the object using template literal
console.log(`Age:${customer.age}`);
console.log(`Email:${customer.email}`);

//Task 2: Object Methods

let order = {       //declared an object with 3 properties and a method inside the object

    orderId: 12345, 
    totalAmount: 150,
    status: "Processing",

    //declared a method to log the order details using this, which referes to the object itself
    displayOrder: function (){          
        console.log(`Order Id: ${this.orderId}`);
        console.log(`Total amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
    
};

order.displayOrder();   //called the method to log order details

//Task 3: Array Manipulation (push, pop, shift, unshift)

let cartItems = ["Calculator", "Pen", "Book"];  //declared an array with 3 product names

cartItems.push("Guitar");   //added a new product to the array
cartItems.pop();            //removed the last item 
cartItems.unshift("Strings");   //added a new item at the beginning 
cartItems.shift();              //removed the first item 

console.log(`Cart Items: ${cartItems}`);    //logged the updated array 


//Task 4: Map Method

let prices = [100, 200, 300];   //declared an array with 3 different prices

function discountPrice(prices){             //used .map() method in a function that applies a 10% discount to each price 
return prices.map(price => price * 0.9)};

let finalPrices = discountPrice(prices);    //declared a variable to store the output from discount price function
console.log(`Discount Prices: $${finalPrices}`); //logged the discounted prices


//Task 5: Filter Method

let inventory = [0, 5, 10, 20, 1];  //declared an object with 5 product quantities

let updated_inventory = inventory.filter(stock => stock > 0);   //use .filter() method to remove products for which stock is 0

console.log(`Updated Inventory: ${updated_inventory}`); //logged the array with updated stock quantities


//Task 6: Reduce Method

let sales = [500, 300, 200, 400];   //declared an array with sales numbers

let total_revenue = sales.reduce((sum, sale) => sum + sale, 0); //used .reduce() method to sum up all the numbers in the array

console.log(`Total Revenue: $${total_revenue}`);    //logged total revenue to the console


//Task 7: find() Method

let customers = ["Alice", "Bob", "Charlie", "David"]; //declared an array with 5 names

let findCustomer = customers.find(customer => customer == "Charlie");   //used .find metod to locate Charlie in the array 

console.log(`Customer Name:${findCustomer}`);      // logged the customer's name


//Task 8: Function Declaration



function calculateTax(taxRate) {    //this function multiplies amount by tax rate to calculate tax amount
    return function(amount){
    return amount * taxRate;
};
}
const fifteenTax = calculateTax(0.15); //declared a 15% tax for calculateTax output 

console.log(`Calculated Tax: $${fifteenTax(1000)}`) //logged calculated tax when amount = 1000


//Task 9: Function Expression

let applyDiscount = function(price, discount) {    //this function multiplies price by discount rate 
    return price * (1 - discount);
};

let discountedPrice = applyDiscount(250, 0.5); //declared $250 price and 50% discount for the function 

console.log(`Discounted Price: $${discountedPrice}`);  //logged the discounted price


//Task 10: Arrow Function

const calculatePoints =  (purchaseAmount) => purchaseAmount / 10; //arrow function that divides purchase amount by 10

let total_points = calculatePoints(99); //declared a variable for the function

console.log(`You have: ${Math.floor(total_points)} loyalty points`); //logged total points earned (1 point per $10 spent) and used Math.floor to return exactly 1 point for $10 
