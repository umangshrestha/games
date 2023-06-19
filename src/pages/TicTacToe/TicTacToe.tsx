import React, { type FC, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  makeMove,
  resetGame,
  setPlayer,
  undoMove
} from '../../store/ticTacToe.slice'
import { type AppDispatch, type RootState } from '../../store/store.types'
import { Board } from '../../components/Board/Board'
import { type TicTacToeProps } from './TicTacToe.types'

import { SquareValue } from '../../components/Square/Square.types'
import { isPlayerTurn, findBestMove } from './TicTacToe.logic'
import styles from './TicTacToe.module.css'
import { HistoryBoard } from '../../components/HistoryBoard/HistoryBoard'
import { GameStatus } from '../../components/GameStatus/GameStatus'
import { DropDownMenu } from '../../components/DropDownMenu/DropDownMenu'

const TicTacToe: FC<TicTacToeProps> = ({
  player,
  board,
  gameState,
  gameHistory,
  wonPositions,
  setBoard,
  resetGame,
  selectHistory,
  selectPlayer
}) => {
  const handleMove = (i: number) => {
    if (isPlayerTurn(player, gameState)) {
      setBoard(i)
    }
  }

  useEffect(() => {
    const ai = player === SquareValue.X ? SquareValue.O : SquareValue.X
    // sleep for 1 second
    if (!isPlayerTurn(ai, gameState)) return

    const timer = setTimeout(() => {
      const move = findBestMove([...board], ai)
      if (move !== -1) {
        setBoard(move)
      }
    }, 1000)
    return () => { clearTimeout(timer) }
  }, [board, player, gameState, makeMove])

  return (
    <div className={styles.parentContainer}>
      <GameStatus gameState={gameState} />
      <div className={styles.childContainer}>
        <Board
          board={board}
          setBoard={handleMove}
          wonPositions={wonPositions}
        />
        <HistoryBoard history={gameHistory} selectHistory={selectHistory} />
      </div>
      <DropDownMenu
        player={player}
        selectPlayer={selectPlayer}
        resetGame={resetGame}
      />
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  ...state.ticTacToe
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setBoard: (i: number) => dispatch(makeMove(i)),
  selectHistory: (i: number) => dispatch(undoMove(i)),
  resetGame: () => dispatch(resetGame()),
  selectPlayer: (player: SquareValue) => dispatch(setPlayer(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe)
