import type { Meta } from '@storybook/react'
import { Square } from './Square'
import { SquareValue } from './Square.types'

const meta: Meta<typeof Square> = {
  title: 'Square',
  component: Square,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: [SquareValue.None, SquareValue.X, SquareValue.O]
      }
    },
    onClick: {
      action: 'clicked'
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Square is a component that renders a button with a value.'
      }
    }
  }
}

export default meta

export const Empty = {
  args: {
    value: SquareValue.None
  },
  parameters: {
    docs: {
      description: {
        story: 'A square with no value'
      }
    }
  }
}

export const X = {
  args: {
    value: SquareValue.X
  },
  parameters: {
    docs: {
      description: {
        story: 'A square with an X'
      }
    }
  }
}

export const O = {
  args: {
    value: SquareValue.O
  },
  parameters: {
    docs: {
      description: {
        story: 'A square with an O'
      }
    }
  }
}
