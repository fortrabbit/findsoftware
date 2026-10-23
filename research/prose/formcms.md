FormCMS is a headless content management system built on ASP.NET Core. It exposes REST and GraphQL APIs for every entity a user defines and stores content in SQLite, PostgreSQL, SQL Server or MySQL. Pages render on the server from Handlebars templates, and the project ships an MCP server so AI agents can design schemas and seed data.

The admin portal, FormMate, is a Node.js application that sits next to the .NET server. The project's Docker image runs both behind one port, and the [wiki](https://github.com/formcms/formcms/wiki) covers setup and architecture, including running from source.

## Worth knowing

The homepage says v1.0 is live, while the newest GitHub release is in the 0.6 series. Running from source needs both Node.js and the .NET SDK. The wiki says only Gemini has been fully tested for the AI features.
