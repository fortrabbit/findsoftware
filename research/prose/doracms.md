DoraCMS is a content management system built on an EggJS server, with Vue 3 user and admin front ends in a pnpm monorepo. The admin center is developed on top of SoybeanAdmin. Page templates use Nunjucks. Content is stored in MongoDB or MariaDB, and the Docker Compose setup starts MongoDB by default, with MariaDB under a Compose profile. Installation clones the repository and runs `pnpm install`, starts the stack with Docker Compose, or scaffolds a project with the `doracms-cli` package.

## Worth knowing

The docs quick start gives Node.js 18.20 or newer, while the README badge gives 14. The repository has a single GitHub release, which predates the current default branch.
