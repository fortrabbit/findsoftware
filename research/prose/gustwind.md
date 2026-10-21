Gustwind is a website creator for large sites built from components. Templates and component definitions default to HTMLisp, a variant of HTML, and the build also accepts TypeScript and Markdown definitions. Data sources bring content into a site, and route definitions connect those sources to pages. Development mode serves the site for preview, and the production build writes static HTML with CSS inlined into the files. Plugins can replace parts of the build. The [documentation](https://gustwind.js.org/) covers the concepts, configuration and deployment.

## Worth knowing

The homepage says the APIs change every once in a while.

Server rendering is partial. The site says portions of Gustwind can run in a server environment, and the Cloudflare Workers adapter renders pages per request through an edge-compatible render path.
