import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

interface SEOProps {
    title?: string
    description?: string
    noindex?: boolean
}

const SITE_URL = 'http://localhost:5174/'
const DEFAULT_TITLE = 'Star Wars Galaxy Explorer | Discover Planets & Characters'
const DEFAULT_DESCRIPTION = 'Explore the Star Wars universe! Discover planets, their residents, and detailed information about characters from a galaxy far, far away.'

export function useSEO({
    title,
    description = DEFAULT_DESCRIPTION,
    noindex = false,
}: SEOProps = {}) {
    const location = useLocation()
    const canonicalUrl = `${SITE_URL}${location.pathname}${location.search}`
    const fullTitle = title ? `${title} | Star Wars Galaxy Explorer` : DEFAULT_TITLE

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    )
}
