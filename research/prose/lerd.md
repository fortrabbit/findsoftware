Lerd is a local development environment for PHP projects on Linux and macOS. It gives each project a .test domain with HTTPS and runs Nginx, PHP-FPM and the project's services as rootless Podman containers, so no Docker daemon is involved. The tool ships as a single Go binary, installed by a script or through apt, dnf or Homebrew.

## Worth knowing

Lerd needs Podman, and on Linux a systemd-based distribution. Windows is supported through WSL2, which is in beta.
