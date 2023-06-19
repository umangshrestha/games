import { type FC } from 'react'
import styles from './Square.module.css'
import { type SquareProps, SquareValue } from './Square.types'

export const Square: FC<SquareProps> = ({ value, onClick, disabled }) => (
  <button
    className={styles.square}
    onClick={onClick}
    disabled={value !== SquareValue.None && disabled}
    data-value={value}
    data-testid={value}
  >
    {value}
  </button>
)
