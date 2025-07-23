# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npx prisma generate` - Generate Prisma client after schema changes
- `npx prisma migrate dev` - Create and apply database migrations
- `npx prisma studio` - Open Prisma Studio database GUI

## Project Architecture

This is a Next.js 15.4.3 application using the App Router architecture with the following structure:

### Core Stack
- **Framework**: Next.js 15.4.3 with App Router
- **Runtime**: React 19.1.0
- **Database**: Prisma ORM 6.12.0 with PostgreSQL
- **Styling**: Tailwind CSS v4 with CSS variables
- **Components**: shadcn/ui components (New York style)
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Package Manager**: pnpm

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Homepage component
  - `globals.css` - Global Tailwind styles
- `lib/` - Shared utilities
  - `utils.ts` - Contains `cn()` helper for merging Tailwind classes
  - `generated/prisma/` - Generated Prisma client (auto-generated)
- `prisma/` - Database schema and migrations
  - `schema.prisma` - Database schema definition
- `components/` - Reusable React components (currently empty but configured for shadcn/ui)
- `public/` - Static assets (SVG icons)

### Configuration Files
- `components.json` - shadcn/ui configuration with path aliases
- `tsconfig.json` - TypeScript config with `@/*` path mapping
- `eslint.config.mjs` - ESLint setup extending Next.js recommendations
- `next.config.ts` - Next.js configuration (minimal setup)
- `postcss.config.mjs` - PostCSS for Tailwind processing

### Path Aliases
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/utils` → `./lib/utils`
- `@/ui` → `./components/ui`
- `@/hooks` → `./hooks`

### Key Patterns
- Uses `clsx` and `tailwind-merge` via the `cn()` utility for conditional styling
- Configured for shadcn/ui component library with CSS variables for theming
- Follows Next.js App Router conventions for file-based routing
- TypeScript strict mode enabled with modern ES2017+ target
- Prisma client generated to `lib/generated/prisma/` for better organization
- PostgreSQL database with environment-based connection string