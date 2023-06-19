import { Fragment, type FC } from 'react';
import styles from './GameStatus.module.css';
import { GameState } from './GameStatus.types';

export const GameStatus: FC<{ gameState: GameState }> = ({ gameState }) => {
  if (gameState === GameState.XTurn || gameState === GameState.OTurn) {
    return (
      <div className={styles.wrapper}>
        <h2>Next Move</h2>
        <label htmlFor="turn" className={styles.toggle} key="turn">
          <input
            id="turn"
            type="checkbox"
            checked={gameState === GameState.XTurn}
            readOnly
          />
          <span key="xTurn" className={styles.XTurn}>
            X Turn
          </span>
          <span key="oTurn" className={styles.OTurn}>
            O Turn
          </span>
        </label>
      </div>
    )
  }

  const gameOverOptions = [
    {
      state: GameState.XWon,
      text: 'X Won',
      id: 'XWon',
      className: styles.XWon
    },
    {
      state: GameState.Draw,
      text: 'Draw',
      id: 'Draw',
      className: styles.Draw
    },
    {
      state: GameState.OWon,
      text: 'O Won',
      id: 'OWon',
      className: styles.OWon
    }
  ]

  return (
    <div className={styles.wrapper}>
      <h2>Game Over</h2>
      <div>
        {gameOverOptions.map(({ state, text, id, className }) => (
          <Fragment key={`fragment-${id}`}>
            <input
              key={`input-${id}`}
              type="radio"
              name="state"
              id={id}
              value={id}
              checked={gameState === state}
              readOnly
            />
            <label htmlFor={id} className={styles.toggle} key={`label-${id}`}>
              <span key={`span-${id}`} className={className}>
                {text}
              </span>
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
