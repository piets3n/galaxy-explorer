import { Routes, Route } from 'react-router-dom'
import { PlanetSlider } from './components/PlanetSlider'
import { ResidentDetail } from './components/ResidentDetail'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <a href="#main-content" className="skip-link">
        <span className="srOnly">Jump to main content</span>
        <span aria-hidden="true">⚡ Hyperspace Jump to Content</span>
      </a>
      <header className={styles.header}>
        <h1 className={styles.title}>Star Wars Galaxy Explorer</h1>
        <p className={styles.subtitle}>Discover planets across the galaxy far, far away...</p>
      </header>
      <main id="main-content" className={styles.main}>
        <Routes>
          <Route path="/" element={<PlanetSlider />} />
          <Route path="/residents/:id" element={<ResidentDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
