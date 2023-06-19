import React, { type FC } from 'react'
import { type HistoryProps } from './History.types'
import styles from './History.module.css'

export const History: FC<HistoryProps> = ({ onClick, text }) => {
  return (
    <button className={styles.historyButton} onClick={onClick}>
      {text}
    </button>
  )
}
