import { useQuery } from '@tanstack/react-query'
import { swapiService } from '../services/swapi'

export function useCharacters(page = 1) {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => swapiService.people.getAll(page),
  })
}

export function useCharacter(id: string) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => swapiService.people.get(id),
    enabled: !!id,
  })
}
