# Star Wars API Explorer

A React application that explores the Star Wars universe using the [SWAPI (Star Wars API)](https://swapi.dev/).

## Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **React Router** - Navigation
- **TanStack Query** - Data Fetching & Caching
- **CSS Modules** - Scoped Styling (Decided against Tailwind CSS)

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

## Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom React hooks
├── services/       # API service layer
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## API

This app uses the [SWAPI](https://swapi.dev/) API:
- Base URL: `https://swapi.dev/api`
- Alternative: `https://swapi.py4e.com/api`

## License

MIT
