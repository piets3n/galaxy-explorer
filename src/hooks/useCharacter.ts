import { useQuery } from '@tanstack/react-query'
import { swapiService } from '../services/swapi'

export function useCharacter(id: string) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => swapiService.people.get(id),
    enabled: !!id,
  })
}
