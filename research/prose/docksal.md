Docksal is a command-line tool, `fin`, that sets up a local web development environment from Docker Compose stacks, with a web server, a database and the tools a project names. The [install guide](https://docs.docksal.io/getting-started/setup/) installs it with a script that runs on macOS, Linux and Windows, and the project's own [documentation](https://docs.docksal.io) covers the services, the custom commands and the stock images. The project's README lists boilerplates for Drupal, WordPress, Laravel and other systems, which `fin project create` uses to build a starting project.

Docksal is maintained by its own team under the MIT license.

## Worth knowing

On Windows, the install guide asks for WSL 1 and says that WSL 2 is not supported by Docksal. On macOS and Windows the containers run through Docker Desktop or VirtualBox, so the host needs one of them.
