import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { DropDownMenu } from './DropDownMenu'
import { SquareValue } from '../Square/Square.types'
import jest from 'jest-mock'

describe('DropDownMenu', () => {
  it.each([SquareValue.None, SquareValue.X, SquareValue.O])(
    'DropDownMenu with value %p',
    (value) => {
      const selectPlayer = jest.fn()
      const resetGame = jest.fn()

      render(
        <DropDownMenu
          player={value}
          selectPlayer={selectPlayer}
          resetGame={resetGame}
        />
      )
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('Reset Game')
      fireEvent.click(button)
      expect(resetGame).toHaveBeenCalled()

      if (value === SquareValue.None) {
        return
      }
      const select = screen.getByRole('combobox')
      expect(select).toHaveValue(value)
      fireEvent.change(select, { target: { value: SquareValue.X } })
      expect(selectPlayer).toHaveBeenCalled()
    }
  )
})
