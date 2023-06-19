import { type Meta } from '@storybook/react'
import { History } from './History'

export default {
  title: 'History',
  component: History,
  tags: ['autodocs'],
  argTypes: {
    history: {
      control: {
        type: 'string',
        onClick: {
          action: 'clicked'
        }
      }
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
} as Meta<typeof History>

export const Default = {
  args: {
    text: 'go to move #'
  }
}
