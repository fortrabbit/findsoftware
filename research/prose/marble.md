Marble is a headless CMS for blog posts, changelogs and articles. Writers use a web dashboard, and a site fetches the content through a REST API. The repository is a pnpm monorepo with a Hono REST API, a Next.js dashboard and an Astro marketing site, and the API runs as a Cloudflare Worker. The contributor guide sets up Postgres and Redis for local development.

## Worth knowing

The project's homepage sells hosted plans, and no self-hosting or deployment guide was found in its documentation. The local setup needs accounts for Google and GitHub sign-in, Cloudflare R2 storage and Upstash Redis.
