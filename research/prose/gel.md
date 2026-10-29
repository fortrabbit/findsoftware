Gel is a graph-relational database that runs on Postgres. Its schema is written as object types with properties and links, its queries use the EdgeQL language, and the schema is exposed through a GraphQL interface. The server includes a graphical UI. Gel Data Inc. maintains the project.

The CLI installs with a bash or PowerShell installer, Homebrew or Nixpkgs, and JavaScript and Python projects can run it through npx or uvx. Docker users run the geldata/gel image, and Linux servers can install the server package, which bundles a systemd unit that starts the server.

## Worth knowing

The Docker container needs about 1 GB of RAM, and the [deployment guide](https://docs.geldata.com/reference/running/deployment) says Gel connects to an external PostgreSQL instance as the PostgreSQL superuser.

The maintainer's [announcement](https://www.geldata.com/blog/gel-joins-vercel) says the company is shutting down, its team is joining Vercel, and Gel Cloud is closed, while Gel stays open source on GitHub.

Installed as a service, the server is a long-running process, so it needs a host that keeps processes running.
