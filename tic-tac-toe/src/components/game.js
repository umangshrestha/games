import React, { useState } from 'react'
import Board, { getPos } from './board'
import Message from './message'
import Button from './button'

// if 3/-3 is seen in the status then the game has been won
const isWon = (status) => status.includes(3) || status.includes(-3) 
   
const Game = () => {
    // board
    const [board, setBoard] = useState(Array(9).fill(0)); // this is for board
    const [isPlayer, setIsPlayer] = useState(1) 
    // 0     1      2    3      4       5      6       7
    // row0  row1 row2   col0   col1   col2    diag0   daig2
    const [statusArr, setStatus] = useState(Array(8).fill(0)) 
    const [message, setMessage] = useState("Click to start")
  
    const updateStatus = (row, column) => {
        const value = isPlayer? 1: -1; // value to be added or subtracted based on player
        let arr = [...statusArr]    
        arr[row] += value;  // adding input to the row
        arr[column+3] += value;  // adding input to the column
        arr[6] += row === column? value : 0; // firsr diagnonal has (0,0) ; (1,1) ; (2,2)
        arr[7] += row + column === 2? value : 0; // row + column is 2 in seond diagnaol (0,2); (1,1); (2,1)
        return arr;        
    }

    const refresh  = () => {
       setBoard(Array(9).fill(0)); 
       setStatus(Array(8).fill(0));
       setIsPlayer(1);
       setMessage("Click to start");    
    }

    const handleInput = (input) => {    
        if (isPlayer === -1) {
            //is the game is over don't play
            return;
        }
        // we add the value of 1 for player one and -1 for player 2 
        // for respective column, row and diagnal
        const [row, column] = input.split("-").map( (i) => parseInt(i, 10));
        let pos = getPos(row, column)
        const boardCopy = [...board]
    
        // only run if box hasn't been clicked before
        if (boardCopy[pos] !== 0){
            return
        }
        let val = isPlayer? "O": "X";
        boardCopy[pos] = val;
        setBoard(boardCopy); // updating board  
        let newStatus = updateStatus(row, column) 
        if (isWon(newStatus)){
            // once game is over
            setMessage(`WON: ${val}`)
            setIsPlayer(-1);
            return;
        }
        console.log(boardCopy, boardCopy.indexOf(0))
        if (boardCopy.indexOf(0)===-1){
            // if no more moves game is draw
            setMessage(`DRAW`)
        } else {
            setIsPlayer(!isPlayer); // updating player
            setMessage(`TURN: ${isPlayer? "X": "O"}`)
            setStatus(newStatus); // updating status
        }
    }

    return (
        <div>
            <Message value={message} />
            <Board onClick={handleInput} value={board} />
            <Button onClick={refresh} value={'Refresh'} />
           
        </div>
    )
}

export default Game