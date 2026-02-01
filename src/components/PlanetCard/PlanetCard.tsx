import type { Planet } from '../../types/swapi'
import { extractIdFromUrl } from '../../services/swapi'
import { usePlanetResidents } from '../../hooks/usePlanetResidents'
import { useInView } from '../../hooks/useInView'
import { formatPopulation } from '../../utils/formatting'
import { LoadMoreButton } from '../LoadMoreButton'
import { PlanetDetailItem } from './PlanetDetailItem'
import { ResidentsList } from './ResidentsList'
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

      <footer className={styles.footer}>
        {planet.residents.length > 0 && (
          <div className={styles.residents}>
            <dt className={styles.residentLabel}>
              Known Residents
            </dt>
            <dd className={styles.residentList}>
              {isInitialLoading ? (
                <span className={styles.loading}>Loading residents...</span>
              ) : residents.length > 0 ? (
                <>
                  <ResidentsList residents={residents} />
                  {hasMoreResidents && (
                    <LoadMoreButton
                      onClick={loadMore}
                      isLoading={isLoadingNewResidents}
                      remainingCount={planet.residents.length - loadedCount}
                      label="Load More"
                    />
                  )}
                </>
              ) : (
                <span className={styles.noResidents}>No known residents</span>
              )}
            </dd>
          </div>
        )}
        <span className={styles.filmCount}>
          Appears in {planet.films.length} film{planet.films.length !== 1 ? 's' : ''}
        </span>
      </footer>
    </article>
  )
}
