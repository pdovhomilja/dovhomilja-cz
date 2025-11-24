## Tech stack

This document defines the technical stack for the dovhomilja.cz personal website and portfolio. It serves as a reference for maintaining consistency across the project.

### Framework & Runtime
- **Application Framework:** Next.js 15.4.3 with App Router
- **Language/Runtime:** Node.js with TypeScript (ES2017+ target, strict mode enabled)
- **Package Manager:** pnpm

### Frontend
- **JavaScript Framework:** React 19.1.0
- **CSS Framework:** Tailwind CSS v4 with CSS variables for theming
- **UI Components:** shadcn/ui (New York style) with custom component library
- **Icons:** Lucide React
- **Fonts:** Geist Sans and Geist Mono (via Google Fonts)
- **Styling Utilities:** clsx and tailwind-merge (via cn() helper)

### Database & Storage
- **Database:** PostgreSQL
- **ORM/Query Builder:** Prisma ORM 6.12.0
- **Client Location:** Custom path at `lib/generated/prisma/`
- **Caching:** None currently implemented

### Testing & Quality
- **Unit/Integration Testing:** Jest (for component and logic testing)
- **E2E Testing:** Playwright (for end-to-end browser automation)
- **Linting/Formatting:** ESLint (extending Next.js recommended configuration)
- **Type Checking:** TypeScript with strict mode

### Deployment & Infrastructure
- **Hosting:** On-premise Coolify instance
- **CI/CD:** GitHub repository with automated deployment to Coolify
- **Build Tool:** Next.js built-in bundler with Turbopack support
- **Deployment Strategy:** Git push triggers automatic deployment

### Third-Party Services
- **Authentication:** better-auth (modern authentication library for Next.js)
- **Email:** Resend 4.7.0 for transactional emails
  - From: contact@dovhomilja.cz
  - Features: HTML/text templates, auto-reply support
- **Monitoring:** PostHog (initialized for analytics)
- **Forms:** Custom contact form with real-time validation

### Path Aliases
The project uses TypeScript path mapping for cleaner imports:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/utils` → `./lib/utils`
- `@/ui` → `./components/ui`
- `@/hooks` → `./hooks`

### Key Development Tools
- **Database Tools:** Prisma Studio for database GUI
- **PostCSS:** For Tailwind CSS processing
- **Development Server:** Next.js dev server on port 3000
