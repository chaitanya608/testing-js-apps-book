const assert = require("assert");
const Cart = require("./Cart");

test("The addToCart function can add an ite mto the cart", () => {
	const cart = new Cart();
	cart.addToCart("cheesecake");

	expect(cart.items).toEqual(["cheesecake"]);
});

test("The removeFromCart function can remove an item from the cart", () => {
	const cart = new Cart();
	cart.addToCart("cheesecake");
	cart.removeFromCart("cheesecake");

	expect(cart.items).toEqual([]);
});
