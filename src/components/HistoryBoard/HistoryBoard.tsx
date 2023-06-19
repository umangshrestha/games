import React, { type FC } from 'react'
import styles from './HistoryBoard.module.css'
import { History } from '../History/History'
import { type HistoryBoardProps } from './HistoryBoard.types'

export const HistoryBoard: FC<HistoryBoardProps> = ({
  history,
  selectHistory
}) => {
  return (
    <ul className={styles.elem}>
      {history.map((_, move) => (
        <li key={move}>
          <History text={`Goto #${move}`} onClick={() => { selectHistory(move) }} />
        </li>
      ))}
    </ul>
  )
}
