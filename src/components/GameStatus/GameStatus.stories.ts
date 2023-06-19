import type { Meta } from '@storybook/react'
import { GameStatus } from './GameStatus'
import { GameState } from './GameStatus.types'

const meta: Meta = {
  title: 'GameStatus',
  component: GameStatus,
  tags: ['autodocs'],
  argTypes: {
    gameState: {
      control: {
        type: 'select',
        options: [
          GameState.XTurn,
          GameState.OTurn,
          GameState.XWon,
          GameState.OWon,
          GameState.Draw
        ]
      }
    }
  }
}

export default meta

export const XWon = {
  args: {
    gameState: GameState.XWon
  },
  parameters: {
    docs: {
      description: {
        story: 'A toggle with X as winner'
      }
    }
  }
}

export const OWon = {
  args: {
    gameState: GameState.OWon
  },
  parameters: {
    docs: {
      description: {
        story: 'A toggle with O as winner'
      }
    }
  }
}

export const Draw = {
  args: {
    gameState: GameState.Draw
  },
  parameters: {
    docs: {
      description: {
        story: 'A toggle with draw'
      }
    }
  }
}

export const XTurn = {
  args: {
    gameState: GameState.XTurn
  },
  parameters: {
    docs: {
      description: {
        story: 'A toggle with X turn'
      }
    }
  }
}

export const OTurn = {
  args: {
    gameState: GameState.OTurn
  },
  parameters: {
    docs: {
      description: {
        story: 'A toggle with O turn'
      }
    }
  }
}
