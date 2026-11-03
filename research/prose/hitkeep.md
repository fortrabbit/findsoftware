HitKeep is a web analytics server. A script tag added to a site's pages sends visits and events to the server, and the dashboard reports traffic, goals, funnels, ecommerce revenue, Search Console data and Web Vitals. The server is one Go binary. It keeps analytics in DuckDB and its control plane in SQLite, and it publishes incoming hits to an embedded NSQ queue, so it needs no separate database, queue or cache service.

It installs with Homebrew, from a Docker Compose file that uses the pascalebeier/hitkeep image, or as a Linux binary run as a native service. The same code runs as HitKeep Cloud in an EU or US region for teams that do not want to operate the server themselves.

## Worth knowing

The tracker sets no analytics cookies and respects Do Not Track, according to the README. Team single sign-on uses OpenID Connect in both the cloud and self-hosted installs.
