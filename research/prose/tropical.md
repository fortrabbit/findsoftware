Tropical is a static site generator that ships as a GitHub template repository. A new site starts as a copy of the template, and its pages are MDX or JSX files in `src/pages`. The build renders them to HTML with React, using Vite for the build.

Components render to HTML with no browser JavaScript by default. Interactive parts are added as islands with the `tropical-islands` package: a component wrapped in `Island` is hydrated in the browser through `src/entry-client.jsx`. A site can also attach plain JavaScript or another library to the server-rendered HTML instead.

## Worth knowing

The template has no package version to upgrade in place. Each release publishes guides for updating dependencies and conventions, so a site keeps its own copy of the code and applies those changes itself.
