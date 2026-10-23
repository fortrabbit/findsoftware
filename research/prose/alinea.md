Alinea is a headless CMS for Next.js. Content types are defined in TypeScript in a `cms.ts` file, and each entry is stored as a JSON file in the project's git repository. Editors work in a dashboard that ships with the site, and the search index for that dashboard is kept in SQLite. Pages query their content in server components, with results typed from the schema.

## Worth knowing

Alinea Cloud is a hosted option next to the open source package: the README offers it as an alternative to running the backend on your own database, and says it handles sign-in and publishing. The main-branch README documents a preview line whose quick start installs the preview tag of the npm package.
