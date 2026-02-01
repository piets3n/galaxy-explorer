import { useState, useRef } from 'react'
import { CharacterCard } from '../CharacterCard'
import { useCharacters } from '../../hooks/useCharacters'
import styles from './CharacterSlider.module.css'

export function CharacterSlider() {

    const [page, setPage] = useState(1)
    const { data, isLoading, isError, error } = useCharacters(page)
    const sliderRef = useRef<HTMLDivElement>(null)

    const characters = data?.results || []
    const hasNext = !!data?.next
    const hasPrevious = !!data?.previous

    const handlePrevious = () => {
        if (hasPrevious && page > 1) {
            setPage(page - 1)
            sliderRef.current?.focus()
        }
    }

    const handleNext = () => {
        if (hasNext) {
            setPage(page + 1)
            sliderRef.current?.focus()
        }
    }

    if (isLoading) {
        return (
            <div className={styles.container} role="status" aria-live="polite">
                <div className={styles.loading}>
                    <span className="srOnly">Loading characters from the galaxy...</span>
                    <div className={styles.loadingAnimation} aria-hidden="true">
                        ⭐✨⭐
                    </div>
                    <p className={styles.loadingText}>Scanning the galaxy...</p>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className={styles.container} role="alert" aria-live="assertive">
                <div className={styles.error}>
                    <h2 className={styles.errorTitle}>These aren't the droids you're looking for</h2>
                    <p className={styles.errorMessage}>
                        We couldn't load the characters. {error instanceof Error ? error.message : 'Unknown error'}
                    </p>
                    <button
                        onClick={() => setPage(1)}
                        className={styles.retryButton}
                        aria-label="Retry loading characters"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <section
            className={styles.container}
            aria-label="Star Wars characters"
            ref={sliderRef}
            tabIndex={-1}
        >
            <div className={styles.header}>
                <h2 className={styles.title}>Characters</h2>
                <span className="srOnly">
                    Page {page} of approximately {Math.ceil((data?.count || 0) / 10)} pages
                </span>
            </div>

            <div className={styles.sliderWrapper}>
                <button
                    onClick={handlePrevious}
                    disabled={!hasPrevious}
                    className={styles.navButton}
                    aria-label={`Go to previous page, page ${page - 1}`}
                    aria-disabled={!hasPrevious}
                >
                    <span aria-hidden="true">←</span>
                    <span className="srOnly">Previous</span>
                </button>

                <div
                    className={styles.slider}
                    role="region"
                    aria-label="Character cards"
                    aria-live="polite"
                >
                    {characters.length > 0 && (
                        <span className="srOnly">
                            Showing {characters.length} characters
                        </span>
                    )}
                    <div className={styles.cardsContainer}>
                        {characters.map((character) => (
                            <CharacterCard key={character.url} character={character} />
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className={styles.navButton}
                    aria-label={`Go to next page, page ${page + 1}`}
                    aria-disabled={!hasNext}
                >
                    <span aria-hidden="true">→</span>
                    <span className="srOnly">Next</span>
                </button>
            </div>

            <nav className={styles.pagination} aria-label="Character list pagination">
                <button
                    onClick={handlePrevious}
                    disabled={!hasPrevious}
                    className={styles.pageButton}
                    aria-label={`Go to previous page, page ${page - 1}`}
                >
                    Previous
                </button>
                <span className={styles.pageInfo}>
                    Page <span aria-current="page">{page}</span>
                </span>
                <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className={styles.pageButton}
                    aria-label={`Go to next page, page ${page + 1}`}
                >
                    Next
                </button>
            </nav>
        </section>
    )
}
