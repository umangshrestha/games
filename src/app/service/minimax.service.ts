

import { Injectable } from '@angular/core';
import { Square } from '../square/square.entity';


interface IWin { winner: Square, pos?: number[] };

const WinningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


@Injectable({
    providedIn: 'root',
})
export class MinimaxService {
    public constructor() {
        let val = localStorage.getItem("_ai");
        if (val)
            this.ai = val as Square;

    }

    private _ai: Square = Square.E;
    private _human: Square = Square.E;

    get ai(): Square {
        return this._ai;
    }

    set ai(value: Square) {
        this._ai = value;
        this._human = this.togglePlayer(value);
        localStorage.getItem("_ai");
    }

    getEmptyBoard() {
        return Array(9).fill(Square.E);
    }


    getWinningPos(board: Square[]): IWin {
        for (const pos of WinningCombinations) {
            const [a, b, c] = pos;
            if (board[a]
                && board[a] === board[b]
                && board[a] === board[c]) {
                return { winner: board[a], pos };
            }
        }
        let emptyBoard = board.filter(square => square === Square.E);

        // if board is empty hardcode the move
        if (emptyBoard.length === 0)
            return  { winner: Square.E, pos: [] };

        return { winner: Square.E };
    }


    togglePlayer(player: Square) {
        switch (player) {
            case Square.X:
                return Square.O;
            case Square.O:
                return Square.X;
            default:
                return Square.E;
        }
    }



    bestMove(board: Square[]) {
        let bestScore = -Infinity;
        let move = -1;
        let emptyBoard = board.filter(square => square === Square.E);

        // if board is empty hardcode the move
        if (emptyBoard.length === 9)
            return 4;

        for (let i = 0; i < board.length; i++) {
            if (board[i] === Square.E) {
                board[i] = this.ai;
                const score = this.minimax(board, 0, false);
                board[i] = Square.E;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    }

    minimax(board: Square[], depth: number, isMaximizing: boolean) {
        const { winner } = this.getWinningPos(board);
        if (winner !== Square.E) {
            return winner === this._ai ? 1 : -1;
        }
        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === Square.E) {
                    board[i] = this.ai;
                    const score = this.minimax(board, depth + 1, false);
                    board[i] = Square.E;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        }
        else {
            let bestScore = Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === Square.E) {
                    board[i] = this._human;
                    const score = this.minimax(board, depth + 1, true);
                    board[i] = Square.E;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }



}
