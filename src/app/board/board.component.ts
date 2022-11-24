import { Component, OnInit } from '@angular/core';
import { Square } from '../square/square.entity';
import { ThemePalette } from '@angular/material/core';
import { MinimaxService } from '../service/minimax.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board!: Square[];
  isX!: boolean;
  winner!: Square;
  winningPos?: number[];

  _ai: Square = Square.E;
  _human: Square = Square.E;

  color: ThemePalette = 'accent';
  disabled = false;


  history: number[] = [];

  constructor(private service: MinimaxService,
    private snackBar: MatSnackBar) { }

  get ai(): Square {
    return this._ai;
  }

  set ai(value: Square) {
    this._ai = value;
    this._human = this.service.togglePlayer(value);
    this.service.ai = value;
    this.aiMove();
  }


  aiMove() {
    // if winner is not there or square is  filled and its ai's turn then proceed
    if (
      this.winner !== Square.E
      || this.isX && this._ai === Square.X
      || !this.isX && this._ai === Square.O) {
      const bestMove = this.service.bestMove(this.board);
      this.makeMove(bestMove, this.ai);
    }
  }

  ngOnInit(): void {
    this.reset();
  }

  disableSquare(pos: number) {
    if (this.winningPos) {
      return !this.winningPos.includes(pos);
    }
    return false;
  }

  reset(): void {
    this.board = this.service.getEmptyBoard();
    this.winner = Square.E;
    this.isX = true;
    this.winningPos = undefined;
    this.aiMove();

  }

  undo(): void {
    const pos = this.history.pop();
    if (pos !== undefined) {
      this.board.splice(pos, 1, Square.E);
      this.winner = Square.E;
      this.winningPos = undefined;
      this.isX = !this.isX;
    }
  }

  makeMove(pos: number, player: Square) {
    this.history.push(pos);
    this.board.splice(pos, 1, player);
    this.isX = !this.isX;
    const { winner, pos: winningPos } = this.service.getWinningPos(this.board);
    this.winner = winner;
    this.winningPos = winningPos;

    if (winner)
      this.snackBar.open(`Yaay!! Player ${winner} has Won`, "close");
    else if (this.winningPos?.length === 0) 
      this.snackBar.open(`Its a Draw`, "close");
    
  }


  onClick(pos: number) {
    // if winner is not there or square is  filled then proceed
    if (this.winner !== Square.E || this.board[pos] !== Square.E) {
      return;
    }

    // if its player turn
    if (this._human === Square.E || this.isX && this._human === Square.X || !this.isX && this._human === Square.O) {
      this.makeMove(pos, this.isX ? Square.X : Square.O);
      this.aiMove();
    }



  }

}

