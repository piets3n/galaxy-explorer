import { Link } from 'react-router-dom'
import { extractIdFromUrl } from '../../services/swapi'
import type { Person } from '../../types/swapi'
import styles from './PlanetCard.module.css'

interface ResidentsListProps {
  residents: Person[]
}

export function ResidentsList({ residents }: ResidentsListProps) {
  return (
    <ul className={styles.residentNames}>
      {residents.map((resident) => {
        const residentId = extractIdFromUrl(resident.url)
        return (
          <li key={resident.url}>
            <Link 
              to={`/residents/${residentId}`}
              className={styles.residentLink}
            >
              {resident.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
