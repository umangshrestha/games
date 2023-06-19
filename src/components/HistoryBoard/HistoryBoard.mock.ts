import { GameState } from '../GameStatus/GameStatus.types'
import { type SquareValue } from '../Square/Square.types'
import { type HistoryItem } from '../History/History.types'

export const HistoryMock: HistoryItem[] = [
  {
    index: 1,
    board: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'] as SquareValue[],
    gameState: GameState.Draw
  },
  {
    index: 2,
    board: ['X', 'O', 'X', 'X', 'O', 'O', 'X', 'X', 'O'] as SquareValue[],
    gameState: GameState.XWon
  },
  {
    index: 3,
    board: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'X'] as SquareValue[],
    gameState: GameState.OWon
  },
  {
    index: 4,
    board: ['X', 'O', 'X', 'X', ' ', 'O', 'O', ' ', ' '] as SquareValue[],
    gameState: GameState.XTurn
  },
  {
    index: 5,
    board: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'] as SquareValue[],
    gameState: GameState.Draw
  }
]
