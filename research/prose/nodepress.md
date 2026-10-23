NodePress is a blog CMS backend built with NestJS on a Fastify runtime. It exposes a RESTful API and needs MongoDB and Redis for a full run. It was written as the API behind the surmon.me blog, and its repository describes it as a headless CMS API service. The project has no admin interface of its own: the README lists the blog's admin site and the blog front end as separate repositories. Sign-in is a single Admin account with a password, plus OAuth login for users. Installation runs `pnpm install` and starts the server with `pnpm run start:prod`.

## Worth knowing

The package requires Node.js 22 or newer. The README describes the project as the API service for the surmon.me blog.
