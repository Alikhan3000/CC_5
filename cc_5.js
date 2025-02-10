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