import { type FC } from 'react';
import { Square } from '../Square/Square';
import styles from './Board.module.css';
import { type BoardProps } from './Board.types';

export const Board: FC<BoardProps> = ({ board, setBoard, wonPositions }) => (
  <div className={styles.board}>
    {board.map((value, i) => (
      <Square
        key={i}
        value={value}
        onClick={() => {
          setBoard(i)
        }}
        disabled={wonPositions != null ? !wonPositions.includes(i) : false}
      />
    ))}
  </div>
)
