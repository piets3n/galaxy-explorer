import type { Planet } from '../../types/swapi'
import { extractIdFromUrl } from '../../services/swapi'
import styles from './PlanetCard.module.css'

interface PlanetCardProps {
  planet: Planet
}

function formatPopulation(population: string): string {
  if (population === 'unknown') return 'Unknown'
  const num = parseInt(population, 10)
  if (isNaN(num)) return population
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}

export function PlanetCard({ planet }: PlanetCardProps) {
  const planetId = extractIdFromUrl(planet.url)
  const id = `planet-${planetId}`

  return (
    <article
      className={styles.card}
      aria-labelledby={`${id}-name`}
      aria-describedby={`${id}-details`}
    >
      <header className={styles.header}>
        <h3 id={`${id}-name`} className={styles.name}>
          {planet.name}
        </h3>
        <span className="srOnly">
          {planet.climate} climate, {planet.terrain} terrain, population {formatPopulation(planet.population)}
        </span>
      </header>

      <dl id={`${id}-details`} className={styles.details}>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Climate</dt>
          <dd className={styles.detailValue}>{planet.climate}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Terrain</dt>
          <dd className={styles.detailValue}>{planet.terrain}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Population</dt>
          <dd className={styles.detailValue}>{formatPopulation(planet.population)}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Diameter</dt>
          <dd className={styles.detailValue}>
            {planet.diameter !== 'unknown' ? `${planet.diameter} km` : 'Unknown'}
          </dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Rotation Period</dt>
          <dd className={styles.detailValue}>
            {planet.rotation_period !== 'unknown' ? `${planet.rotation_period} hours` : 'Unknown'}
          </dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Orbital Period</dt>
          <dd className={styles.detailValue}>
            {planet.orbital_period !== 'unknown' ? `${planet.orbital_period} days` : 'Unknown'}
          </dd>
        </div>
      </dl>

      <footer className={styles.footer}>
        <span className={styles.residentCount}>
          {planet.residents.length} known resident{planet.residents.length !== 1 ? 's' : ''}
        </span>
        <span className={styles.filmCount}>
          Appears in {planet.films.length} film{planet.films.length !== 1 ? 's' : ''}
        </span>
      </footer>
    </article>
  )
}
