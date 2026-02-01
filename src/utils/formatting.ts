export function formatPopulation(population: string): string {
  if (population === 'unknown') return 'Unknown'
  const num = parseInt(population, 10)
  if (isNaN(num)) return population
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}
