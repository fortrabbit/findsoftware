wp-env is a command-line tool that starts a local WordPress environment for building and testing plugins and themes without manual setup. It runs WordPress with Docker by default, and it links the plugins, themes and mappings from the project into the environment's work directory, so file changes show up there. The package is published from the Gutenberg monorepo and maintained within the WordPress project.

## Worth knowing

The Docker runtime needs Docker running. Two runtimes need no Docker: PHP, which uses the PHP installed on the computer with SQLite, and Playground, which runs WordPress in WebAssembly. The docs label both non-Docker runtimes experimental, and the Docker runtime uses MySQL where they use SQLite.
