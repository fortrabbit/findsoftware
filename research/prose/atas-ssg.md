Ata's SSG is a PHP static site generator for GitHub Pages. Markdown pages and posts are kept as files in the `pages` and `posts` folders of a clone or fork of the repository, and a GitHub Action builds the site and deploys it to GitHub Pages. The [GitHub Pages guide](https://github.com/atas/ssg/blob/main/GITHUB-PAGES.md) covers the Pages configuration. A local development server runs through `make dev-server`, which needs Docker.

## Worth knowing

The repository has no tagged release. It requires a separate PHP library, atas/ssg-system-php, and links the GitHub Action and Docker image as separate repositories.
