import { render, screen } from '@testing-library/react'
import { GameStatus } from './GameStatus'
import { GameState } from './GameStatus.types'

describe('GameStatus', () => {
  it.each([
    {
      gameState: GameState.XTurn,
      text: 'X Turn'
    },
    {
      gameState: GameState.OTurn,
      text: 'O Turn'
    },
    {
      gameState: GameState.XWon,
      text: 'X Won'
    },
    {
      gameState: GameState.Draw,
      text: 'Draw'
    },
    {
      gameState: GameState.OWon,
      text: 'O Won'
    }
  ])('GameStatus with gameState %p', ({ gameState, text }) => {
    render(<GameStatus key={text} gameState={gameState} />)
    const span = screen.getByText(text)
    expect(span).toBeInTheDocument()
  })
})
