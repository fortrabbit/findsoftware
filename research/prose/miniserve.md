miniserve is a command-line web server that serves one file or one directory over HTTP from a single binary. Its systemd unit can start it for a path as a daemon, so it can serve a directory unattended. It can be installed from release binaries and several package managers, with Cargo from crates.io, or run from a Docker or Podman image.

## Worth knowing

By default miniserve listens on all interfaces. The README notes that a public interface can also need the systemd unit's address rules changed.
