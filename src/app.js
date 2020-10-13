
const pricingRules = require("../data/pricingRules");
const Cart = require("./cart");

let cart = new Cart(pricingRules);

let product1 = {
    name: "Strawberries",
    code: "SR1",
    price: 5.00,
    discount: "discount01"
}
let product2 = {
    name: "Fruit tea",
    code: "FR1",
    price: 3.11,
    discount: "discount02"
}

let product3 = {
    name: "Coffee",
    code: "CF1",
    price: 11.23
}

// add all products into cart

cart.add(product1); 
cart.add(product2);
cart.add(product2);
cart.add(product2);
cart.add(product1);
cart.add(product1); 
cart.add(product1);
cart.add(product3);


console.log('My Cart: ' + cart.total());