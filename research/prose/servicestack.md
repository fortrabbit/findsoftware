ServiceStack is a web services framework for .NET. It serves HTTP services with REST endpoints, Razor views and a set of built-in admin screens for users, roles, API keys and logs, all in one app. Its data access library, OrmLite, works with PostgreSQL, SQL Server, MariaDB, MySQL and SQLite. A new project starts from `npx create-net`, and the framework is also published as a NuGet package.

An app runs as a .NET process on the server. The [rsync deployment guide](https://docs.servicestack.net/netcore-deploy-rsync) for Ubuntu keeps that process running under supervisor behind an nginx reverse proxy, and the Kamal deployment path runs the app in a Docker container on a Linux host.

## Worth knowing

The source is published under the GNU Affero General Public License with a FOSS License Exception, and any other use falls under the commercial ServiceStack License Agreement. The free licenses cover individuals, collaborative open source projects and small apps within the free usage quotas. The pricing page lists paid Indie and Business licenses, sold per developer.
