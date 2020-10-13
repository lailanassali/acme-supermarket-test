
const Discount = require("./discounts");

class Cart {
    // initiate pricing rules and empty product cart.
    constructor(pricingRules) {
        this.products = [];
        this.pricingRules = pricingRules;
    }

    // add product to cart
    add(product) {
        this.products.push(product);
    }

    total() {
        let total = 0;
        if (this.pricingRules.length > 0) {
            this.pricingRules.forEach((rule) => {
                const itemsOnDiscount = this.products.filter((product) =>
                // get the discount values from the pricing rule data
                    product.discount === rule.discount
                );
                let currTotal = 0;
                // add product discount data to cart using discount calculations 
                if (itemsOnDiscount.length >= 1) {
                    switch (rule.discount) {
                        case "discount01": {
                            currTotal = Discount.discountOne(itemsOnDiscount[0].price, itemsOnDiscount.length);
                            break;
                        }
                        case "discount02": {
                            currTotal = Discount.discountTwo(itemsOnDiscount[0].price, itemsOnDiscount.length, rule.discountPercent, rule.minProducts);
                            break;
                        }
                        default: {
                            currTotal = currTotal;
                            break;
                        }
                    }
                }

                total += currTotal;
            });
    
            // get the products with no discount to cart
            var itemsNotOnDiscount = this.products.filter((product) => !product.discount);
            return total + itemsNotOnDiscount.reduce((acc, product) => { return acc + product.price }, 0);
        }
        else {
            // add products with no discount to cart
            return this.products.reduce((acc, product) => { return acc + product.price }, 0);
        }

    }
}

module.exports = Cart;