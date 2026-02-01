import styles from './PlanetCard.module.css'

interface PlanetDetailItemProps {
  label: string
  value: string
  unit?: string
}

export function PlanetDetailItem({ label, value, unit }: PlanetDetailItemProps) {
  const displayValue = value === 'unknown' 
    ? 'Unknown' 
    : `${value}${unit ? ` ${unit}` : ''}`
  
  return (
    <div className={styles.detailItem}>
      <dt className={styles.detailLabel}>{label}</dt>
      <dd className={styles.detailValue}>{displayValue}</dd>
    </div>
  )
}
