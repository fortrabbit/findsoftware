Sitepins is an open-source CMS that edits the Markdown and frontmatter files of a site kept in a GitHub or GitLab repository. Content stays in the repository, and nothing is copied into a Sitepins database.

The editing interface is a Next.js application, and the backend is an Express API with MongoDB. Self-hosting needs Node.js 22 or later, and the README gives two ways to start it: pnpm, or a docker compose file that brings up MongoDB, the API and the web app together.

## Worth knowing

A hosted version, Sitepins Cloud, is offered next to the open-source build, and its [pricing page](https://sitepins.com/pricing) lists the plans. The self-hosted build is described as having no plans, billing or usage limits. Self-hosting also needs a MongoDB instance that runs as a replica set.
