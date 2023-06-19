export enum SquareValue {
  X = 'X',
  O = 'O',
  None = ' ',
}

export interface SquareProps {
  value: SquareValue
  onClick: () => void
  disabled: boolean
}
