# Star Wars Galaxy Explorer

A React application that explores the Star Wars universe using the [SWAPI (Star Wars API)](https://swapi.dev/). Discover planets across the galaxy, view their residents, and explore detailed character information.

## Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **React Router** - Navigation
- **TanStack Query** - Data Fetching & Caching
- **React Helmet Async** - SEO & Meta Tag Management
- **CSS Modules** - Scoped Styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Features

- 🌌 Browse planets with pagination
- 👥 View planet residents with lazy loading
- 🔍 Detailed character information
- ♿ Full accessibility support (ARIA labels, keyboard navigation, screen reader support)
- 🔍 SEO optimized with dynamic meta tags and canonical URLs
- 📱 Responsive design

## Project Structure

```
src/
├── components/     # React components
│   ├── PlanetCard/      # Planet card with resident details
│   ├── PlanetSlider/    # Main planet browsing interface
│   └── ResidentDetail/  # Individual character detail view
├── hooks/          # Custom React hooks
│   ├── usePlanets.ts         # Fetch paginated planets
│   ├── usePlanetResidents.ts # Load planet residents
│   ├── useResidents.ts       # Fetch resident data
│   ├── useCharacter.ts       # Fetch character details
│   ├── useInView.ts          # Intersection Observer hook
│   └── useSEO.tsx            # SEO meta tag management
├── services/       # API service layer
│   └── swapi.ts    # SWAPI client
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## API

This app uses the [SWAPI](https://swapi.dev/) API:
- Base URL: `https://swapi.dev/api`

## SEO

The app uses `react-helmet-async` for dynamic SEO management:
- Dynamic page titles
- Meta descriptions
- Canonical URLs
- Robots meta tags

SEO is managed through the `useSEO` hook, which can be used in any component.

## License

MIT
