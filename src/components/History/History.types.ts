import { type GameState } from '../GameStatus/GameStatus.types'
import { type SquareValue } from '../Square/Square.types'

export interface HistoryItem {
  index: number
  board: SquareValue[]
  gameState: GameState
}

export interface HistoryProps {
  onClick: () => void
  text: string
}
