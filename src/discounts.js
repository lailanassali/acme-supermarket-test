// Calculates discount for buy one get one free
const discountOne = (productPrice, numOfItems) => {
    const remainder = Math.round(numOfItems / 2);
    let total = (remainder * productPrice);
    return total;
}

// Calculates discount to buy bulk orders
const discountTwo = (productPrice, noOfItems, discountPercent, minProducts) => {
    let total;
    if (noOfItems >= minProducts) {
        total = (noOfItems * productPrice) - ((discountPercent / 100) * noOfItems * productPrice);
    } else {
        total = noOfItems * productPrice;
    }
    return total;
}

module.exports = {
    discountOne: discountOne,
    discountTwo: discountTwo
}