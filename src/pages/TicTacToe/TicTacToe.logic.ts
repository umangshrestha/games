/**
 * @fileoverview This file contains the logic for the tic-tac-toe game.
 * It is used by the store to update the state of the game.
 */
import { SquareValue } from '../../components/Square/Square.types'
import { GameState } from '../../components/GameStatus/GameStatus.types'

const winPositions = [
  [0, 1, 2], // horizontal
  [3, 4, 5], // horizontal
  [6, 7, 8], // horizontal
  [0, 3, 6], // vertical
  [1, 4, 7], // vertical
  [2, 5, 8], // vertical
  [0, 4, 8], // diagonal
  [2, 4, 6] // diagonal
]

export const isMovesLeft = (squares: SquareValue[]) => {
  return squares.some((square) => square === SquareValue.None)
}

export const getWinner = (squares: SquareValue[]): SquareValue => {
  const wonPositions = getWonPositions(squares)
  if (wonPositions.length > 0) {
    return squares[wonPositions[0]]
  }
  return SquareValue.None
}

export const getWonPositions = (squares: SquareValue[]): number[] => {
  for (const pos of winPositions) {
    const [a, b, c] = pos
    if (
      squares[a] !== SquareValue.None &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return pos
    }
  }
  return []
}

export const isPlayerTurn = (player: SquareValue, gameState: GameState) =>
  (gameState === GameState.XTurn && player === SquareValue.X) ||
  (gameState === GameState.OTurn && player === SquareValue.O)

const minimax = (
  squares: SquareValue[],
  depth: number,
  isMaximizing: boolean,
  player: SquareValue,
  alpha: number,
  beta: number
): number => {
  if (!isMovesLeft(squares)) {
    return 0
  }

  const winner = getWinner(squares)
  if (winner !== SquareValue.None) {
    return winner === player ? 10 - depth : depth - 10
  }

  const availableMoves = squares.reduce<number[]>(
    (acc, square, index) =>
      square === SquareValue.None ? [...acc, index] : acc,
    []
  )

  if (isMaximizing) {
    let bestScore = -Infinity

    for (const i of availableMoves) {
      squares[i] = player
      const score = minimax(squares, depth + 1, false, player, alpha, beta)
      squares[i] = SquareValue.None

      bestScore = Math.max(score, bestScore)
      alpha = Math.max(alpha, bestScore)

      if (beta <= alpha) break // Beta cutoff
    }

    return bestScore
  }

  let bestScore = Infinity

  for (const i of availableMoves) {
    squares[i] = player === SquareValue.X ? SquareValue.O : SquareValue.X
    const score = minimax(squares, depth + 1, true, player, alpha, beta)
    squares[i] = SquareValue.None

    bestScore = Math.min(score, bestScore)
    beta = Math.min(beta, bestScore)

    if (beta <= alpha) break // Alpha cutoff
  }

  return bestScore
}

export const findBestMove = (
  squares: SquareValue[],
  player: SquareValue
): number => {
  const availableMoves = squares.reduce<number[]>(
    (acc, curr, index) => (curr === SquareValue.None ? [...acc, index] : acc),
    []
  )

  if (availableMoves.length === 9) return 4

  let bestScore = -Infinity
  let bestMove = -1
  availableMoves.forEach((i) => {
    squares[i] = player
    const score = minimax(squares, 0, false, player, -Infinity, Infinity)
    squares[i] = SquareValue.None

    if (score > bestScore) {
      bestScore = score
      bestMove = i
    }
  })

  return bestMove
}
