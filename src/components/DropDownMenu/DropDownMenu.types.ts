import { type SquareValue } from '../Square/Square.types'

export interface DropDownMenuProps {
  player: SquareValue
  selectPlayer: (player: SquareValue) => void
  resetGame: () => void
}
