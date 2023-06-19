import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Square } from './Square'
import { SquareValue } from './Square.types'
import jest from 'jest-mock'

describe('Square', () => {
  it.each([
    {
      value: SquareValue.None,
      expectedString: '',
      isOnClickCalled: true
    },
    {
      value: SquareValue.X,
      expectedString: 'X',
      isOnClickCalled: false
    },
    {
      value: SquareValue.O,
      expectedString: 'O',
      isOnClickCalled: false
    }
  ])('Square with value %p', ({ value, expectedString, isOnClickCalled }) => {
    const onClick = jest.fn()
    render(<Square value={value} onClick={onClick} disabled={false} />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(expectedString)
    fireEvent.click(button)
    if (isOnClickCalled) {
      expect(onClick).toHaveBeenCalled()
    } else {
      expect(onClick).not.toHaveBeenCalled()
    }
  })
})
