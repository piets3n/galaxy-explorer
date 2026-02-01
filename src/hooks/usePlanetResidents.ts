import { useState } from 'react'
import { useResidents } from './useResidents'
import type { Planet, Person } from '../types/swapi'

const RESIDENTS_PER_LOAD = 3

export function usePlanetResidents(planet: Planet) {
  const [loadedCount, setLoadedCount] = useState(RESIDENTS_PER_LOAD)
  const residentsToLoad = planet.residents.slice(0, loadedCount)
  const residentQueries = useResidents(residentsToLoad)
  
  const residents = residentQueries
    .map((query) => query.data)
    .filter((resident): resident is Person => !!resident)
  
  const isLoadingNewResidents = residentQueries
    .some((query) => query.isLoading && !query.data)
  
  const isInitialLoading = residents.length === 0 && 
    residentQueries.some((query) => query.isLoading)
  
  const hasMoreResidents = planet.residents.length > loadedCount
  
  const loadMore = () => {
    setLoadedCount((prev) => Math.min(prev + 3, planet.residents.length))
  }
  
  return {
    residents,
    isLoadingNewResidents,
    isInitialLoading,
    hasMoreResidents,
    loadedCount,
    loadMore,
  }
}
