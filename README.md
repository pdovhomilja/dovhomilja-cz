Personal portfolio site

Tech stack:

1. NextJS as a Framework
2. TypeScript
3. TailwindCSS
4. NextAuth (configured with Next.js 13.2 App folder) + protected API routes
5. Prisma + MongoDB - content + auth store

You must set up .env.local with
DATABASE_URL="mongodb+srv://<userName>:<userPass>@portfolio.3wr0mtz.mongodb.net/<dbName>"

NEXTAUTH_JWT_SECRET="someJWTsecret"

NEXTAUTH_SECRET="some randome secret"
