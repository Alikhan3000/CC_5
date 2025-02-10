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