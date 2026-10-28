Hatamoto is a content management system from Zen Labs Corporation, in Australia. The site, the admin, the JSON API and the MCP endpoint run in one Go program, next to a Postgres database that holds the content. Pages are rendered on the server through Go html/template theme files, and editors work in a web admin with a visual page builder. It installs from a release binary or with Docker Compose, and runs as a long-lived service that restarts when it stops. Content types are set up in the admin, and a WordPress importer is documented. Plugins and themes come from a directory on the project's site.

## Worth knowing

Each install is one site in one language. The project's own comparison with WordPress lists several sites from one install and multiple languages as things WordPress does and Hatamoto does not.
