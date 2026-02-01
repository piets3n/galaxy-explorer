import { useParams, Link } from 'react-router-dom'
import { useCharacter } from '../../hooks/useCharacters'
import styles from './ResidentDetail.module.css'

export function ResidentDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: resident, isLoading, isError } = useCharacter(id || '')

  if (isLoading) {
    return (
      <div className={styles.container} role="status" aria-live="polite">
        <div className={styles.loading}>
          <span className="srOnly">Loading resident information...</span>
          <div className={styles.loadingAnimation} aria-hidden="true">
            ⭐✨⭐
          </div>
          <p className={styles.loadingText}>Scanning the galaxy for resident information...</p>
        </div>
      </div>
    )
  }

  if (isError || !resident) {
    return (
      <div className={styles.container} role="alert" aria-live="assertive">
        <div className={styles.error}>
          <h2 className={styles.errorTitle}>Resident not found</h2>
          <p className={styles.errorMessage}>
            We couldn't find information about this resident.
          </p>
          <Link to="/" className={styles.backButton}>
            Back to Planets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.backLink}>
          ← Back to Planets
        </Link>
      </nav>

      <header className={styles.header}>
        <h1 className={styles.name}>{resident.name}</h1>
        <span className="srOnly">
          {resident.gender}, born {resident.birth_year}, {resident.height}cm tall
        </span>
      </header>

      <dl className={styles.details}>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Height</dt>
          <dd className={styles.detailValue}>{resident.height} cm</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Mass</dt>
          <dd className={styles.detailValue}>{resident.mass} kg</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Gender</dt>
          <dd className={styles.detailValue}>{resident.gender}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Birth Year</dt>
          <dd className={styles.detailValue}>{resident.birth_year}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Eye Color</dt>
          <dd className={styles.detailValue}>{resident.eye_color}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Hair Color</dt>
          <dd className={styles.detailValue}>{resident.hair_color}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Skin Color</dt>
          <dd className={styles.detailValue}>{resident.skin_color}</dd>
        </div>
      </dl>
    </article>
  )
}
