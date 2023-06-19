import { type SquareValue } from '../../components/Square/Square.types'
import { type GameState } from '../../components/GameStatus/GameStatus.types'
import { type HistoryItem } from '../../components/History/History.types'

export interface TicTacToeState {
  player: SquareValue
  board: SquareValue[]
  gameState: GameState
  gameHistory: HistoryItem[]
  wonPositions: number[] | null
}

export interface TicTacToeProps extends TicTacToeState {
  setBoard: (index: number) => void
  resetGame: () => void
  selectHistory: (index: number) => void
  selectPlayer: (player: SquareValue) => void
}
