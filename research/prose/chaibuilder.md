ChaiBuilder is an AI-enabled visual website builder for Next.js, maintained by ChaiBuilder contributors. Editors work on a drag-and-drop canvas with Tailwind styling. Pages are rendered by the Next.js app, built on first visit and revalidated when published, so the site needs a server runtime: a long-running Node process, a container or a managed Next.js platform such as Vercel, Netlify or Cloudflare. Content lives in a SQLite or Postgres database.

The project is added to a Next.js app as a git subtree, or created with the `npx chaibuilder-app create` scaffolder, which sets up a starter project.

## Worth knowing

The open-source core is BSD-3-Clause. The starter runs chaipro, a licensed edition that adds multi-tenancy, role-based access control and multilingual support, among others. It runs free for 30 days and needs a license key after that, and its source is not included. The core's README names an npm package that is not on the registry, so the subtree is the install path that works for the core.
