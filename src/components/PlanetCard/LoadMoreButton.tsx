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
  const buttonText = isLoading 
    ? 'Loading...' 
    : `${label} (+${remainingCount})`
  
  const ariaLabel = isLoading
    ? `Loading more items, ${remainingCount} remaining`
    : `${label}, ${remainingCount} remaining`

  return (
    <button
      onClick={onClick}
      className={styles.button}
      aria-label={ariaLabel}
      disabled={isLoading}
    >
      {buttonText}
    </button>
  )
}
