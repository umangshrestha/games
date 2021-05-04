import React from 'react'
import Box from './box'

const style = {
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

/*
format [r-c :pos]

BOARD:
	0-0:  0   0-1: 1   0-2: 2
	1-0:  3   1-1: 4   1-2: 5
	2-0 : 6   2-2: 7   2-1: 8

corresponding value in array
[input]  i-j
[output] 3*i + j
*/
export const getPos = (row, column) => 3 * row + column 

const Board = (props) => {
        let boxes = []
        for (var r=0; r<3; r++){
            for (var c=0; c<3; c++){
                let name = `${r}-${c}`;
                let pos = getPos(r, c);
                let value = props.value[pos]? props.value[pos] : "" // if value is 0 display ""
                boxes.push(<Box key={name} name={name} onClick={()=>props.onClick(name)} value={value}/>);
            }    
        }
        return (<div style={style}>{boxes}</div>)
}

export default Board