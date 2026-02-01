import { useQueries } from '@tanstack/react-query'
import { swapiService, extractIdFromUrl } from '../services/swapi'

export function useResidents(residentUrls: string[]) {
  return useQueries({
    queries: residentUrls.map((url) => {
      const id = extractIdFromUrl(url)
      return {
        queryKey: ['resident', id],
        queryFn: () => swapiService.people.get(id),
        enabled: !!id && !!url,
        staleTime: 1000 * 60 * 10,
      }
    }),
  })
}

export function useResidentNames(residentUrls: string[]): {
  names: string[]
  isLoading: boolean
  isError: boolean
} {
  const queries = useResidents(residentUrls)
  
  const names = queries
    .map((query) => query.data?.name)
    .filter((name): name is string => !!name)
  
  const isLoading = queries.some((query) => query.isLoading)
  const isError = queries.some((query) => query.isError)

  return { names, isLoading, isError }
}
