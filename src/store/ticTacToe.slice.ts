import { createSlice } from '@reduxjs/toolkit'
import { SquareValue } from '../components/Square/Square.types'
import { GameState } from '../components/GameStatus/GameStatus.types'
import {
  getWinner,
  getWonPositions,
  isMovesLeft
} from '../pages/TicTacToe/TicTacToe.logic'
import { initialState } from './initialstate'

const ticTacToSlice = createSlice({
  name: 'tic-tac-toe',
  initialState: structuredClone(initialState),
  reducers: {
    makeMove: (state, action) => {
      if (
        state.gameState !== GameState.XTurn &&
        state.gameState !== GameState.OTurn
      ) { return }

      const index = action.payload as number
      if (state.board[index] !== SquareValue.None) return
      const board = state.board.slice()
      board[index] =
        state.gameState === GameState.XTurn ? SquareValue.X : SquareValue.O

      state.board = board
      const winner = getWinner(state.board)
      const movesLeft = isMovesLeft(state.board)

      if (winner !== SquareValue.None) {
        state.gameState =
          winner === SquareValue.X ? GameState.XWon : GameState.OWon
        state.wonPositions = getWonPositions(state.board)
      } else if (!movesLeft) {
        state.gameState = GameState.Draw
      } else {
        state.gameState =
          state.gameState === GameState.XTurn
            ? GameState.OTurn
            : GameState.XTurn
      }

      state.gameHistory.push({
        index,
        board: structuredClone(state.board),
        gameState: state.gameState
      })
    },
    undoMove: (state, payload) => {
      const index = payload.payload as number
      if (index < 0 || index >= state.gameHistory.length) return
      const { board, gameState } = state.gameHistory[index]
      state.board = board
      state.gameState = gameState
      state.gameHistory = state.gameHistory.slice(0, index + 1)
    },
    resetGame: (state) => {
      // cgange every value but keep the player value the same
      initialState.player = state.player
      Object.assign(state, initialState)
    },
    setPlayer: (state, action) => {
      let player = action.payload as SquareValue
      if (player === SquareValue.None) player = SquareValue.X
      state.player = player
    }
  }
})

export const { makeMove, undoMove, resetGame, setPlayer } =
  ticTacToSlice.actions

export default ticTacToSlice.reducer
