import type { Planet } from '../../types/swapi'
import { extractIdFromUrl } from '../../services/swapi'
import { usePlanetResidents } from '../../hooks/usePlanetResidents'
import { useInView } from '../../hooks/useInView'
import { formatPopulation } from '../../utils/formatting'
import { PlanetDetailItem } from './PlanetDetailItem'
import { PlanetCardFooter } from './PlanetCardFooter'
import styles from './PlanetCard.module.css'

interface PlanetCardProps {
  planet: Planet
}

export function PlanetCard({ planet }: PlanetCardProps) {
  const planetId = extractIdFromUrl(planet.url)
  const id = `planet-${planetId}`
  const { ref, isInView } = useInView<HTMLElement>();

  const {
    residents,
    isLoadingNewResidents,
    isInitialLoading,
    hasMoreResidents,
    loadedCount,
    loadMore,
  } = usePlanetResidents(planet, isInView)

  return (
    <article
      ref={ref}
      className={styles.card}
      aria-labelledby={`${id}-name`}
      aria-describedby={`${id}-details`}
    >
      <header className={styles.header}>
        <h3 id={`${id}-name`} className={styles.name}>
          {planet.name}
        </h3>
        <p className={styles.filmInfo}>
          {planet.films.length === 0
            ? 'Not in a movie'
            : `Appears in ${planet.films.length === 1 ? 'a' : planet.films.length} movie${planet.films.length !== 1 ? 's' : ''}`}
        </p>
        <span className="srOnly">
          {planet.climate} climate, {planet.terrain} terrain, population {formatPopulation(planet.population)}
        </span>
      </header>

      <dl id={`${id}-details`} className={styles.details}>
        <PlanetDetailItem label="Climate" value={planet.climate} />
        <PlanetDetailItem label="Terrain" value={planet.terrain} />
        <PlanetDetailItem
          label="Population"
          value={formatPopulation(planet.population)}
        />
        <PlanetDetailItem
          label="Diameter"
          value={planet.diameter}
          unit="km"
        />
        <PlanetDetailItem
          label="Rotation Period"
          value={planet.rotation_period}
          unit="hours"
        />
        <PlanetDetailItem
          label="Orbital Period"
          value={planet.orbital_period}
          unit="days"
        />
      </dl>

      <PlanetCardFooter
        planet={planet}
        residents={residents}
        isInitialLoading={isInitialLoading}
        isLoadingNewResidents={isLoadingNewResidents}
        hasMoreResidents={hasMoreResidents}
        loadedCount={loadedCount}
        onLoadMore={loadMore}
      />
    </article>
  )
}
