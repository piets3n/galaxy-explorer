import type { Planet, Person } from '../../types/swapi'
import { LoadMoreButton } from './LoadMoreButton'
import { ResidentsList } from './ResidentsList'
import styles from './PlanetCard.module.css'

interface PlanetCardFooterProps {
  planet: Planet
  residents: Person[]
  isInitialLoading: boolean
  isLoadingNewResidents: boolean
  hasMoreResidents: boolean
  loadedCount: number
  onLoadMore: () => void
}

export function PlanetCardFooter({
  planet,
  residents,
  isInitialLoading,
  isLoadingNewResidents,
  hasMoreResidents,
  loadedCount,
  onLoadMore,
}: PlanetCardFooterProps) {
  return (
    <footer className={styles.footer}>
      {planet.residents.length > 0 && (
        <div className={styles.residents}>
          <dt className={styles.residentLabel}>Known Residents</dt>
          <dd className={styles.residentList}>
            {isInitialLoading ? (
              <span className={styles.loading}>Loading residents...</span>
            ) : residents.length > 0 ? (
              <>
                <ResidentsList residents={residents} />
                {hasMoreResidents && (
                  <LoadMoreButton
                    onClick={onLoadMore}
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
    </footer>
  )
}
