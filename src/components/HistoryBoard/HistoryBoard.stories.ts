import { type Meta } from '@storybook/react'
import { HistoryMock } from './HistoryBoard.mock'
import { HistoryBoard } from './HistoryBoard'

export default {
  title: 'HistoryBoard',
  component: HistoryBoard,
  tags: ['autodocs'],
  argTypes: {
    history: {
      control: {
        type: 'select',
        options: [HistoryMock]
      }
    },
    selectHistory: {
      action: 'clicked'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'History is a component that renders a list of previous moves.'
      }
    }
  }
} as Meta<typeof HistoryBoard>

export const Default = {
  args: {
    history: HistoryMock
  }
}

export const Empty = {
  args: {
    history: []
  }
}
