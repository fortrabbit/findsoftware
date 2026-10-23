StudioCMS is a headless CMS that runs inside an Astro project as an Astro integration. It adds a dashboard, served at `/dashboard` by default, for managing content and settings, and it stores content in a database: libSQL by default, or MySQL or PostgreSQL set through the StudioCMS config file. The site is built with server output and the Node adapter in standalone mode. Rendering plugins turn stored content into pages, and at least one must be installed. The REST API is built on Astro endpoints, and its protected routes take an API token generated in the dashboard. Built-in authentication uses a username and password, and oAuth providers such as GitHub or Google are added as plugins.

## Worth knowing

The docs recommend the production build for the dashboard and say development mode can show Vite dependency errors. File storage is a no-op until a storage plugin such as the S3 manager is configured.
