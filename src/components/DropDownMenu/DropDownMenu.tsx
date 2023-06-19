import React, { FC } from 'react';
import { DropDownMenuProps } from './DropDownMenu.types';
import { SquareValue } from '../Square/Square.types';
import styles from './DropDownMenu.module.css';

export const DropDownMenu: FC<DropDownMenuProps> = ({
  player,
  selectPlayer,
  resetGame,
}) => {
  if (player === SquareValue.None) {
    selectPlayer(SquareValue.X);
    resetGame();
  }

  return (
    <div className={styles.wrapper}>
      <h2>Game Mode</h2>
      <select
        value={player}
        onChange={(e) => selectPlayer(e.target.value as SquareValue)}
      >
        <option value={SquareValue.X}>Player(X) vs AI(O)</option>
        <option value={SquareValue.O}>Player(O) vs. AI(X)</option>
      </select>
      <button type="reset" className={styles.resetGame} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};
