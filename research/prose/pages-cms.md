Pages CMS is a web editor for the content and media files of static sites stored in a GitHub repository. Editors work in the browser, and saved changes go back to the repository as files, so content does not live in a database. The app keeps its own state in PostgreSQL: auth data, collaborators, the parsed .pages.yml configuration and a cache.

The app is connected to GitHub through a GitHub App, which a setup helper creates. The project also runs a hosted copy at app.pagescms.org, which the README describes as an option for editing without running anything locally.

## Worth knowing

A self-hosted instance needs a PostgreSQL database, the GitHub App, and a running process started with npm run start, as the [self-hosting guide](https://pagescms.org/docs/guides/installing/self-host/) describes. The project has a Discord chat linked from its README.
