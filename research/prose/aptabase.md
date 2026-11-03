Aptabase is an analytics platform for apps. An app adds one of the Aptabase SDKs, and the SDK sends named events to an Aptabase server, which stores them and shows them on a dashboard. The SDKs cover mobile, desktop and web apps; the web SDK for single-page apps is installed from npm, as the [documentation](https://aptabase.com/docs) describes. The server is the open source code in the [main repository](https://github.com/aptabase/aptabase), and it runs either as a managed cloud service in an EU or a US region, or on the operator's own servers.

For self-hosting, the [self-hosting guide](https://github.com/aptabase/self-hosting) starts a Docker Compose stack that runs the application with PostgreSQL and ClickHouse. The guide says a new account is registered in the web interface and activated through a link that appears in the container logs.

## Worth knowing

The server's license is AGPLv3, which requires that changes to the code be shared. The SDKs are a separate set of repositories and carry their own licenses. The managed cloud is a service run by the creators of Aptabase, and its plans are priced by event volume.
