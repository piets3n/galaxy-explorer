import styles from './LoadMoreButton.module.css'

interface LoadMoreButtonProps {
  onClick: () => void
  isLoading: boolean
  remainingCount: number
  label?: string
}

export function LoadMoreButton({ 
  onClick, 
  isLoading, 
  remainingCount,
  label = 'Load More'
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      aria-label={`${label}, ${remainingCount} remaining`}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : `${label} (+${remainingCount})`}
    </button>
  )
}
