import { type Meta } from '@storybook/react'
import { Board } from './Board'
import { SquareValue } from '../Square/Square.types'

export default {
  title: 'Board',
  component: Board,
  tags: ['autodocs'],
  argTypes: {
    board: {
      control: {
        type: 'select',
        options: [
          Array(9).fill(SquareValue.None),
          Array(9).fill(SquareValue.X),
          Array(9).fill(SquareValue.O)
        ]
      }
    },
    setBoard: {
      action: 'clicked'
    },
    wonPositions: {
      control: {
        type: 'array',
        options: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Board is a component that renders a board with 9 squares.'
      }
    }
  }
} as Meta<typeof Board>

export const Default = {
  args: {
    board: Array(9).fill(SquareValue.None)
  }
}

export const X = {
  args: {
    board: Array(9).fill(SquareValue.X)
  }
}

export const O = {
  args: {
    board: Array(9).fill(SquareValue.O)
  }
}

export const Draw = {
  args: {
    board: [
      SquareValue.X,
      SquareValue.O,
      SquareValue.X,
      SquareValue.X,
      SquareValue.O,
      SquareValue.X,
      SquareValue.O,
      SquareValue.X,
      SquareValue.O
    ]
  }
}
