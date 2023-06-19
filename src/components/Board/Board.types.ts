import { type SquareValue } from '../Square/Square.types';

export interface BoardProps {
  board: SquareValue[]
  setBoard: (i: number) => void
  wonPositions: number[] | null
}
