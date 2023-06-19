import { render, screen } from '@testing-library/react';
import { HistoryBoard } from './HistoryBoard';
import { SquareValue } from '../Square/Square.types';
import { GameState } from '../GameStatus/GameStatus.types';
import jest from 'jest-mock';

describe('HistoryBoard', () => {
  it('it renders all items', () => {
    const history = [
      {
        index: 0,
        board: Array(9).fill(SquareValue.None),
        gameState: GameState.XTurn
      },
      {
        index: 1,
        board: Array(9).fill(SquareValue.None),
        gameState: GameState.OTurn
      }
    ]
    const selectHistory = jest.fn()
    render(<HistoryBoard history={history} selectHistory={selectHistory} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(`Goto #${index}`)
      button.click()
      expect(selectHistory).toHaveBeenCalledWith(index)
    })
  })
})
