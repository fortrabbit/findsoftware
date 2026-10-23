Staart Site turns a folder of markdown content into a static website for helpdesk or documentation use. It is added to a project as a dev dependency or run once with npx, and it writes the site to a `public` folder. The code is written in TypeScript.

Because the output is plain files with no server part, a site can be published to GitHub Pages. The [GitHub Pages guide](https://staart.js.org/site/github-pages-actions) shows a GitHub Actions workflow that pushes the built folder to a `gh-pages` branch.
