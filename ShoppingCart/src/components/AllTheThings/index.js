import React from "react";

function AllTheThings(props) {
	return (
		<div className="AllTheThings">
			<h2>Put these in your cart!</h2>
			<ul>{props.children}</ul>
		</div>
	);
}

export default AllTheThings;
