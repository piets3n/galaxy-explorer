import type { Person } from '../../types/swapi'
import { extractIdFromUrl } from '../../services/swapi'
import styles from './CharacterCard.module.css'

interface CharacterCardProps {
  character: Person
}

export function CharacterCard({ character }: CharacterCardProps) {
  const characterId = extractIdFromUrl(character.url)
  const id = `character-${characterId}`

  return (
    <article
      className={styles.card}
      aria-labelledby={`${id}-name`}
      aria-describedby={`${id}-details`}
    >
      <header className={styles.header}>
        <h3 id={`${id}-name`} className={styles.name}>
          {character.name}
        </h3>
        <span className={styles.srOnly}>
          {character.gender}, born {character.birth_year}, {character.height}cm tall
        </span>
      </header>

      <dl id={`${id}-details`} className={styles.details}>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Height</dt>
          <dd className={styles.detailValue}>{character.height} cm</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Mass</dt>
          <dd className={styles.detailValue}>{character.mass} kg</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Gender</dt>
          <dd className={styles.detailValue}>{character.gender}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Birth Year</dt>
          <dd className={styles.detailValue}>{character.birth_year}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Eye Color</dt>
          <dd className={styles.detailValue}>{character.eye_color}</dd>
        </div>
        <div className={styles.detailItem}>
          <dt className={styles.detailLabel}>Hair Color</dt>
          <dd className={styles.detailValue}>{character.hair_color}</dd>
        </div>
      </dl>

      <footer className={styles.footer}>
        <span className={styles.filmCount}>
          Appears in {character.films.length} film{character.films.length !== 1 ? 's' : ''}
        </span>
      </footer>
    </article>
  )
}
