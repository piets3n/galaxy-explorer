import { CharacterSlider } from './components/CharacterSlider'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Star Wars API Explorer</h1>
        <p className={styles.subtitle}>Explore the galaxy far, far away...</p>
      </header>
      <main className={styles.main}>
        <CharacterSlider />
      </main>
    </div>
  )
}

export default App
