Hatsu is a bridge that makes a static site reachable from the fediverse. It runs on the creator's own server, takes the site's content from the site's feed, and presents the site's pages as ActivityPub posts from a Hatsu account. Fediverse users can follow the site or search for a page URL and land on the matching post, and replies from the fediverse come back to the static site as backfeed.

To connect a site, the site publishes its feed, serves the well-known files that Hatsu returns as static files, and adds an alternate link tag to each page. The [documentation](https://hatsu.cli.rs) covers the setup. Hatsu is written in Rust and runs as a Docker image or as a binary from GitHub Releases. Its settings come from environment variables, and it stores data in SQLite or PostgreSQL.

## Worth knowing

The documentation calls Hatsu a work in progress, and the README marks backfeed as WIP. Because Hatsu runs as a server process, the static site needs a separate machine or container running Hatsu next to its hosting.
