import React from 'react'

const style = {
	width: "250px",
	margin: "0 auto",
	display: "grid",
    fontSize: "40px",
	fontWeight: "800",
};

const Button = (props) => <button style={style} onClick={props.onClick}>{props.value}</button>

export default Button