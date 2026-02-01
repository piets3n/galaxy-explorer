import type {
  Person,
  Planet,
  Film,
  Species,
  Vehicle,
  Starship,
  SWAPIResponse,
  ResourceType,
} from '../types/swapi';

const API_BASE_URL = 'https://swapi.dev/api';

/**
 * Fetches data from SWAPI
 * 
 * Note: A fallback strategy could be implemented here to use
 * https://swapi.py4e.com/api as a backup endpoint if the primary API fails.
 * This would improve reliability but adds complexity.
 */
async function fetchFromSWAPI<T>(endpoint: string): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
}

export function extractIdFromUrl(url: string): string {
  const match = url.match(/\/(\d+)\/?$/);
  return match ? match[1] : '';
}

export function parseResourceUrl(url: string): { type: ResourceType; id: string } | null {
  const match = url.match(/\/api\/(\w+)\/(\d+)\/?$/);
  if (!match) return null;
  
  return {
    type: match[1] as ResourceType,
    id: match[2],
  };
}

export const peopleService = {
  async getAll(page = 1): Promise<SWAPIResponse<Person>> {
    return fetchFromSWAPI<SWAPIResponse<Person>>(`/people/?page=${page}`);
  },

  async get(id: string): Promise<Person> {
    return fetchFromSWAPI<Person>(`/people/${id}/`);
  },

  async search(query: string): Promise<SWAPIResponse<Person>> {
    return fetchFromSWAPI<SWAPIResponse<Person>>(`/people/?search=${encodeURIComponent(query)}`);
  },
};

export const planetsService = {
  async getAll(page = 1): Promise<SWAPIResponse<Planet>> {
    return fetchFromSWAPI<SWAPIResponse<Planet>>(`/planets/?page=${page}`);
  },

  async get(id: string): Promise<Planet> {
    return fetchFromSWAPI<Planet>(`/planets/${id}/`);
  },

  async search(query: string): Promise<SWAPIResponse<Planet>> {
    return fetchFromSWAPI<SWAPIResponse<Planet>>(`/planets/?search=${encodeURIComponent(query)}`);
  },
};

export const filmsService = {
  async getAll(page = 1): Promise<SWAPIResponse<Film>> {
    return fetchFromSWAPI<SWAPIResponse<Film>>(`/films/?page=${page}`);
  },

  async get(id: string): Promise<Film> {
    return fetchFromSWAPI<Film>(`/films/${id}/`);
  },

  async search(query: string): Promise<SWAPIResponse<Film>> {
    return fetchFromSWAPI<SWAPIResponse<Film>>(`/films/?search=${encodeURIComponent(query)}`);
  },
};

// Species endpoints
export const speciesService = {
  async getAll(page = 1): Promise<SWAPIResponse<Species>> {
    return fetchFromSWAPI<SWAPIResponse<Species>>(`/species/?page=${page}`);
  },

  async get(id: string): Promise<Species> {
    return fetchFromSWAPI<Species>(`/species/${id}/`);
  },

  async search(query: string): Promise<SWAPIResponse<Species>> {
    return fetchFromSWAPI<SWAPIResponse<Species>>(`/species/?search=${encodeURIComponent(query)}`);
  },
};

// Vehicles endpoints
export const vehiclesService = {
  async getAll(page = 1): Promise<SWAPIResponse<Vehicle>> {
    return fetchFromSWAPI<SWAPIResponse<Vehicle>>(`/vehicles/?page=${page}`);
  },

  async get(id: string): Promise<Vehicle> {
    return fetchFromSWAPI<Vehicle>(`/vehicles/${id}/`);
  },

  async search(query: string): Promise<SWAPIResponse<Vehicle>> {
    return fetchFromSWAPI<SWAPIResponse<Vehicle>>(`/vehicles/?search=${encodeURIComponent(query)}`);
  },
};

// Starships endpoints
export const starshipsService = {
  async getAll(page = 1): Promise<SWAPIResponse<Starship>> {
    return fetchFromSWAPI<SWAPIResponse<Starship>>(`/starships/?page=${page}`);
  },

  async get(id: string): Promise<Starship> {
    return fetchFromSWAPI<Starship>(`/starships/${id}/`);
  },

  async search(query: string): Promise<SWAPIResponse<Starship>> {
    return fetchFromSWAPI<SWAPIResponse<Starship>>(`/starships/?search=${encodeURIComponent(query)}`);
  },
};

export const swapiService = {
  people: peopleService,
  planets: planetsService,
  films: filmsService,
  species: speciesService,
  vehicles: vehiclesService,
  starships: starshipsService,
  extractIdFromUrl,
  parseResourceUrl,
};
