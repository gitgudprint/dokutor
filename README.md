# Dokutor

A document management application built with [Next.js](https://nextjs.org), [Prisma](https://www.prisma.io/), [Kinde Auth](https://kinde.com/), and [tRPC](https://trpc.io/).

## Prerequisites

Make sure the following are installed on your machine before starting:

- [Node.js](https://nodejs.org/) v18 or later
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) — a running PostgreSQL database instance

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gitgudprint/dokutor.git
cd dokutor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project by copying the example below:

```bash
cp .env.example .env   # if an example file exists, otherwise create it manually
```

Open `.env` and fill in the following variables:

```env
# PostgreSQL connection string
DATABASE_URL="******HOST:PORT/DATABASE"

# Kinde Auth — create a free account at https://kinde.com and set up an application
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=https://your-subdomain.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```

**Where to get these values:**

- **`DATABASE_URL`** — Your PostgreSQL connection string. If running locally, it typically looks like `******localhost:5432/dokutor`.
- **Kinde variables** — Sign up at [kinde.com](https://kinde.com), create a new application, and copy the credentials from the application's *Details* page. Set the allowed callback URLs in Kinde to include `http://localhost:3000/api/auth/kinde_callback`.

### 4. Set up the database

Run Prisma migrations to create the database schema:

```bash
npx prisma migrate dev --name init
```

This will apply all migrations and generate the Prisma client. To inspect your database visually, you can also run:

```bash
npx prisma studio
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Creates an optimised production build |
| `npm run start` | Runs the production build (requires `npm run build` first) |
| `npm run lint` | Runs ESLint across the project |

## Project Structure

```
src/
├── app/          # Next.js App Router pages and API routes
├── components/   # Reusable React components
├── db/           # Prisma client instance
├── lib/          # Utility helpers
└── server/       # tRPC router and procedures
prisma/
└── schema.prisma # Database schema
```

## Deployment

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). After deploying, add all the environment variables listed in step 3 to your Vercel project settings and point `DATABASE_URL` to a hosted PostgreSQL provider (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app)).

For more details see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
