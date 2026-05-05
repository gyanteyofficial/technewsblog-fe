# TechNewsBlog Frontend

An Angular 21 frontend application for a tech news blog, scaffolded with the Angular CLI.

## Project Structure

- `src/` — Application source code
  - `main.ts` — Entry point
  - `app/` — Root component (`app.ts`, `app.html`, `app.css`, `app.config.ts`, `app.routes.ts`)
  - `styles.css` — Global styles
- `public/` — Static assets
- `angular.json` — Angular workspace + dev server configuration
- `tsconfig.json` — TypeScript configuration

## Tech Stack

- **Framework**: Angular 21 (standalone components, Signals)
- **Build**: Angular CLI / Esbuild + Vite dev server
- **Language**: TypeScript
- **Package Manager**: npm

## Development

The app runs on port 5000 via the "Start application" workflow:
```
NG_CLI_ANALYTICS=false ng serve
```

Key `angular.json` serve settings configured for Replit:
- `host: 0.0.0.0`
- `port: 5000`
- `allowedHosts: true`

## Deployment

Configured as a **static** site:
- **Build command**: `npm run build`
- **Public dir**: `dist/technewsblog-fe/browser`
