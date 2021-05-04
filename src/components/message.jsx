import React from 'react'

const style = {
	width: "300px",
	margin: "0 auto",
	display: "grid",
    fontSize: "40px",
	fontWeight: "800",
	textAlign:'center' 
};

const Message = (props) => <h1 style={style}>{props.value}</h1>	

export default Message