import { GameState } from '../components/GameStatus/GameStatus.types'
import { SquareValue } from '../components/Square/Square.types'
import { type TicTacToeState } from '../pages/TicTacToe/TicTacToe.types'

export const initialState: TicTacToeState = {
  player: SquareValue.X,
  board: Array(9).fill(SquareValue.None),
  gameState: GameState.XTurn,
  wonPositions: null,
  gameHistory: []
}
