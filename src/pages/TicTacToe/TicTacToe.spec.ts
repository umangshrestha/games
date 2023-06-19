import { SquareValue } from '../../components/Square/Square.types'
import { GameState } from '../../components/GameStatus/GameStatus.types'
import {
  isMovesLeft,
  getWinner,
  isPlayerTurn,
  findBestMove
} from './TicTacToe.logic'

describe('ticTacToe', () => {
  it('should return draw', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'X', 'X'
    ] as SquareValue[]
    const movesLeft = isMovesLeft(squares)
    const winner = getWinner(squares)
    expect(movesLeft).toBe(false)
    expect(winner).toBe(SquareValue.None)
  })

  it('should return X wins', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'X', 'X', 'O'
    ] as SquareValue[]
    const movesLeft = isMovesLeft(squares)
    const winner = getWinner(squares)
    expect(movesLeft).toBe(false)
    expect(winner).toBe(SquareValue.X)
  })

  it('should return O wins', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'O', 'X'
    ] as SquareValue[]
    const movesLeft = isMovesLeft(squares)
    const winner = getWinner(squares)
    expect(movesLeft).toBe(false)
    expect(winner).toBe(SquareValue.O)
  })

  it('should return in progress', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'X', ' '
    ] as SquareValue[]
    const movesLeft = isMovesLeft(squares)
    const winner = getWinner(squares)
    expect(movesLeft).toBe(true)
    expect(winner).toBe(SquareValue.None)
  })

  it('should return in progress for empty board', () => {
    // prettier-ignore
    const squares = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ] as SquareValue[]
    const movesLeft = isMovesLeft(squares)
    const winner = getWinner(squares)
    expect(movesLeft).toBe(true)
    expect(winner).toBe(SquareValue.None)
  })

  it('should return in progress for partially filled board', () => {
    // prettier-ignore
    const squares = [
      'X', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ] as SquareValue[]
    const movesLeft = isMovesLeft(squares)
    const winner = getWinner(squares)
    expect(movesLeft).toBe(true)
    expect(winner).toBe(SquareValue.None)
  })
})

describe('is player turn', () => {
  it('should return true for X', () => {
    const isTurn = isPlayerTurn(SquareValue.X, GameState.XTurn)
    expect(isTurn).toBe(true)
  })

  it('should return false for X', () => {
    const isTurn = isPlayerTurn(SquareValue.X, GameState.OTurn)
    expect(isTurn).toBe(false)
  })

  it('should return true for O', () => {
    const isTurn = isPlayerTurn(SquareValue.O, GameState.OTurn)
    expect(isTurn).toBe(true)
  })

  it('should return false for O', () => {
    const isTurn = isPlayerTurn(SquareValue.O, GameState.XTurn)
    expect(isTurn).toBe(false)
  })

  it('should return false for XWon', () => {
    const isTurn = isPlayerTurn(SquareValue.X, GameState.XWon)
    expect(isTurn).toBe(false)
  })

  it('should return false for OWon', () => {
    const isTurn = isPlayerTurn(SquareValue.O, GameState.OWon)
    expect(isTurn).toBe(false)
  })

  it('should return false for Draw', () => {
    const isTurn = isPlayerTurn(SquareValue.O, GameState.Draw)
    expect(isTurn).toBe(false)
  })
})

describe('minimax', () => {
  it('first move should be in the middle', () => {
    // prettier-ignore
    const squares = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', ' '
    ] as SquareValue[]
    const result = findBestMove(squares, SquareValue.X)
    expect(result).toBe(4)
  })

  it('when there is no possible move, should return -1', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', 'X', 'X'
    ] as SquareValue[]
    const result = findBestMove(squares, SquareValue.X)
    expect(result).toBe(-1)
  })

  it('when there is only one possible move, should return it', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      'O', ' ', ' '
    ] as SquareValue[]
    const result = findBestMove(squares, SquareValue.X)
    expect(result).toBe(7)
  })

  it('when there is both winning and preventing win, should choose winning move', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      ' ', ' ', ' '
    ] as SquareValue[]
    const result = findBestMove(squares, SquareValue.X)
    expect(result).toBe(6)
  })

  it('when there is only one possible drawing move, should return it', () => {
    // prettier-ignore
    const squares = [
      'X', 'O', 'X',
      'X', 'O', 'O',
      ' ', ' ', ' '
    ] as SquareValue[]
    const result = findBestMove(squares, SquareValue.O)
    expect(result).toBe(7)
  })
})
