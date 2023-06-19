import React, { useEffect } from 'react'
import TicTacToe from './pages/TicTacToe/TicTacToe'
import styles from './App.module.css'

const App = () => {
  useEffect(() => {
    document.title = 'Tic Tac Toe'
  }, [])

  return (
    <>
      <header>
        <h1 className={styles.header}>Tic Tac Toe</h1>
      </header>
      <main>
        <TicTacToe />
      </main>
      <footer className={styles.footer}>
        <span>
          &copy; <em>2023</em> by Umang Shrestha
        </span>
      </footer>
    </>
  )
}

export default App
