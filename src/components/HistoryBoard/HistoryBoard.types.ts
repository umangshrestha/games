import { type HistoryItem } from '../History/History.types'

export interface HistoryBoardProps {
  history: HistoryItem[]
  selectHistory: (move: number) => void
}
