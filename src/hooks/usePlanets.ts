import { useQuery } from '@tanstack/react-query'
import { swapiService } from '../services/swapi'

export function usePlanets(page = 1) {
  return useQuery({
    queryKey: ['planets', page],
    queryFn: () => swapiService.planets.getAll(page),
  })
}

export function usePlanet(id: string) {
  return useQuery({
    queryKey: ['planet', id],
    queryFn: () => swapiService.planets.get(id),
    enabled: !!id,
  })
}
