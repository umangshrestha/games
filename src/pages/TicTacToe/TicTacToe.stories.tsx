import TicTacToe from './TicTacToe'
import { type Meta } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

export default {
  title: 'TicTacToe',
  component: TicTacToe,
  decorators: [(Story) => <Provider store={store}>{Story()}</Provider>]
} as Meta<typeof TicTacToe>

export const Default = () => <TicTacToe />
