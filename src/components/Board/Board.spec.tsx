import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Board } from './Board'
import { SquareValue } from '../Square/Square.types'
import jest from 'jest-mock'

describe('Board', () => {
  it.each([SquareValue.None, SquareValue.X, SquareValue.O])(
    'component should be created with value %p',
    (value) => {
      const setBoard = jest.fn()
      const board = Array(9).fill(value)
      const wonPositions = [1, 2, 3]
      render(
        <Board board={board} setBoard={setBoard} wonPositions={wonPositions} />
      )
      if (value === SquareValue.None) {
        return
      }
      const squares = screen.getAllByTestId(value)
      expect(squares.length).toBe(9)
      squares.forEach((square) => {
        fireEvent.click(square)
        expect(setBoard).not.toHaveBeenCalled()
        expect(square).toHaveTextContent(value)
      })
    }
  )
})
