import ticTacToeReducer from './ticTacToe.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer
  }
})
