Gridsome is a framework for building static websites and apps with Vue.js. Pages are `.vue` files in `src/pages`, and a `[param].vue` file is a dynamic route. Source plugins fetch content from local files or external APIs into a local database, and a GraphQL data layer queries it. The build writes one HTML file and one JSON file for each page.

Each generated page loads as static HTML and then hydrates into a Vue single-page app in the browser. The [deployment guide](https://gridsome.org/docs/deployment/) says a site needs a static web host and lists services for Git-based deploys, as well as uploading the build folder over FTP.

## Worth knowing

The docs name VuePress, Nuxt and Gatsby as alternatives.
