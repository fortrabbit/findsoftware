Harold is a static site generator that builds blogs, docs sites and landing pages from Markdown files with front matter. Layouts and partials are Handlebars templates, and styling is written in SCSS. The ready-made templates include a Lunr-powered search setup for content-heavy sites. Content stays as plain files in the project, and the build writes static HTML that any static host can serve.

A site starts with the [create-harold-app](https://github.com/harold-js/create-harold-app) scaffolder, which installs harold-scripts.

## Worth knowing

Template and directory names are set at setup. The getting-started guide says to rename the content and layout directories right after init, and to change the search configuration when the posts path changes.
