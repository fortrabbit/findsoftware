Pageel CMS is a self-hosted content management system for Astro sites. It uses a Git repository as the content backend, so Markdown and MDX files and images stay in the repo and no database is needed. Editors use a web dashboard, and the Git token stays on the server. GitHub is the default Git service, with Gitea and Gogs as options.

Login can use a username and password with a repository configured on the server, a username and password with each user supplying their own repository and token, or no account of its own, where each user brings a repository and token.

The [deployment guide](https://github.com/pageel/pageel-cms/blob/main/docs/deployment.md) describes two targets: Vercel, through the Astro Vercel adapter, and a Node server built with the Node adapter and run from `dist/server/entry.mjs`, with a Docker example. REDD CO., LTD maintains it.

## Worth knowing

The Vercel deployment runs as serverless functions, and the docs note that the rate limiter resets on each cold start. The README lists a separate commercial product, Pageel Workhub, for team workflow, review and permissions.
