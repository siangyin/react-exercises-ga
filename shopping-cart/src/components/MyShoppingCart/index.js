import React from "react";

function MyShoppingCart(props) {
	return (
		<div className="MyShoppingCart">
			<h2>Your Cart!</h2>
			<ul>{props.children}</ul>
		</div>
	);
}

export default MyShoppingCart;
