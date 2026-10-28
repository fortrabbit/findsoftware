Takeout is a command-line tool that starts a Docker container for each development dependency a project needs, such as MySQL, Redis or Meilisearch, and stops or removes those containers on request. It is meant to be paired with Laravel Valet, and the README lists macOS, Linux and Windows through WSL2 as supported platforms. The recommended way to run it is the Docker image through a shell alias, and the Composer package is the alternative for environments that already have PHP.

## Worth knowing

The README says that disabling a service removes its container but keeps its data in a Docker volume, so the data stays until that volume is deleted. The README marks the Composer route as not recommended, and its example pins an older release line, while the Docker alias pulls the latest image.
