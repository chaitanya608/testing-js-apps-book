// deepStrictEqual takes either a string or an error object as third argument and returns undefined if assertion is passed and error if failed.

const assert = require("assert");
const Cart = require("./Cart");

const cart = new Cart();
cart.addToCart("cheesecake");

const assertionResult = assert.deepStrictEqual(cart.items, ["cheesecake"]);

if (!assertionResult) {
	console.log("The addToCart function can add an item to the cart");
} else {
	console.log(assertionResult);
}
