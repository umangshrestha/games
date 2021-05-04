import React from 'react'

const styleO = {
	background: "lightblue",
	border: "3px solid darkblue",
	fontSize: "40px",
	fontWeight: "800",
	color: 'green',
	cursor: "pointer",
	outline: "none",
};

const styleX = {
	background: "lightblue",
	border: "3px solid darkblue",
	fontSize: "40px",
	fontWeight: "800",
	color: 'red',
	cursor: "pointer",
	outline: "none",
};

const Box = (props) => (
	<button name={props.name} style={props.value === "X"? styleX: styleO} onClick={props.onClick}>
		{props.value}
	</button>
)

export default Box