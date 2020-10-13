const Cart = require('../src/cart');

describe('Cart', () => {
    describe('add', () => {
        it('should add a product to the shopping cart', () => {
            const pricingRules = [{
                description: "BUY_ONE_GET_ONE_FREE",
                discount: "discount01"
            }];
            const product = {
                name: "Strawberries",
                code: "SR1",
                price: 5.00,
                discount: "discount02"
            }
            const cart = new Cart(pricingRules);
            cart.add(product);
            expect(cart.products[0].code).toEqual('SR1');
        });
    });

    describe('total', () => {
        it('should calculate the total price of products in the shopping cart', () => {
            const pricingRules = [];
            const product1 = {
                 name: "Coffee",
                 code: "CF1",
                 price: 11.23
            }
            const product2 = {
                name: "Fruit tea",
                code: "FR1",
                price: 3.11,
                discount: "discount01"
            }
            const product3 = {
                name: "Strawberry",
                code: "SR1",
                price: 5.00,
                discount: "discount02"
            }
        
            const cart = new Cart(pricingRules);
            cart.add(product1);
            cart.add(product2);
            cart.add(product3);
            const total = cart.total();
            expect(total).toBe(19.34);
        });
        it('should calculate the total with the BUY_ONE_GET_ONE_FREE rule enabled', () => {
            const pricingRules = [{
                description: "BUY_ONE_GET_ONE_FREE",
                discount: "discount01"
            }];
            const cart = new Cart(pricingRules);
            const product1 = {
                name: "Fruit tea",
                code: "FR1",
                price: 3.11,
                discount: "discount01"
            }
            cart.add(product1);
            cart.add(product1);
            const total = cart.total();
            expect(total).toBe(3.11);
        });
        it('should calculate the total with the BUY_IN_BULK rule enabled', () => {
            const pricingRules = [{
                description: "BUY_IN_BULK",
                minProducts: 3,
                discountPercent: 10,
                discount: "discount02"
            }];
            const product = {
                name: "Strawberry",
                code: "SR1",
                price: 5.00,
                discount: "discount02"
            }
            const cart = new Cart(pricingRules);
            cart.add(product);
            cart.add(product);
            cart.add(product);
            cart.add(product);
            cart.add(product);
            cart.add(product);
            const total = cart.total();
            expect(total).toBe(27);
        });
    });
});