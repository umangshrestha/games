import { type Meta } from '@storybook/react'
import { DropDownMenu } from './DropDownMenu'

export default {
  title: 'DropDownMenu',
  component: DropDownMenu,
  argTypes: {
    player: {
      control: {
        type: 'select',
        options: ['X', 'O']
      }
    },
    setPlayer: {
      action: 'click'
    }
  }
} as Meta<typeof DropDownMenu>

export const PlayerX = {
  args: {
    player: 'X'
  }
}

export const PlayerO = {
  args: {
    player: 'O'
  }
}
